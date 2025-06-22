/**
 * Markdown Viewer Script
 * Parses and renders Markdown content from .md files
 */

class MarkdownViewer {
    constructor() {
        this.mdContainer = null;
    }

    async loadMarkdown(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Failed to fetch markdown: ${response.statusText}`);
            }
            const mdText = await response.text();
            return this.renderMarkdown(mdText);
        } catch (error) {
            console.error('Error loading markdown:', error);
            return `<div class="error-message">Failed to load content: ${error.message}</div>`;
        }
    }

    renderMarkdown(mdText) {
        // Simple Markdown to HTML conversion
        // Headers
        let html = mdText
            .replace(/^# (.*$)/gm, '<h1>$1</h1>')
            .replace(/^## (.*$)/gm, '<h2>$1</h2>')
            .replace(/^### (.*$)/gm, '<h3>$1</h3>')
            .replace(/^#### (.*$)/gm, '<h4>$1</h4>')
            .replace(/^##### (.*$)/gm, '<h5>$1</h5>')
            .replace(/^###### (.*$)/gm, '<h6>$1</h6>');

        // Bold and Italic
        html = html
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\*(.*?)\*/g, '<em>$1</em>')
            .replace(/\_\_(.*?)\_\_/g, '<strong>$1</strong>')
            .replace(/\_(.*?)\_/g, '<em>$1</em>');

        // Links
        html = html.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank">$1</a>');

        // Lists
        html = html.replace(/^\s*\*\s(.*$)/gm, '<li>$1</li>');
        html = html.replace(/^\s*\-\s(.*$)/gm, '<li>$1</li>');
        html = html.replace(/^\s*\d\.\s(.*$)/gm, '<li>$1</li>');
        
        // Wrap lists in <ul> or <ol>
        html = html.replace(/<li>.*?<\/li>(?=\n<li>)/g, function(match) {
            return '<ul>' + match;
        });
        html = html.replace(/<\/li>\n(?!<li>)/g, '</li></ul>\n');

        // Code blocks
        html = html.replace(/```(.*?)```/gs, '<pre><code>$1</code></pre>');
        
        // Inline code
        html = html.replace(/`(.*?)`/g, '<code>$1</code>');

        // Images
        html = html.replace(/!\[(.*?)\]\((.*?)\)/g, '<img alt="$1" src="$2" class="md-image">');

        // Blockquotes
        html = html.replace(/^\>(.*$)/gm, '<blockquote>$1</blockquote>');

        // Paragraphs (wrap text not in other elements)
        html = html.replace(/^(?!(<h|<ul|<ol|<li|<blockquote|<img|<pre))(.*$)/gm, function(match) {
            if (match.trim() === '') return '';
            return '<p>' + match + '</p>';
        });

        return `<div class="markdown-content">${html}</div>`;
    }

    displayInModal(mdContent, title) {
        // Create modal container
        const modal = document.createElement('div');
        modal.className = 'md-modal';
        
        // Create modal content
        const modalContent = document.createElement('div');
        modalContent.className = 'md-modal-content';
        
        // Create header with title and close button
        const header = document.createElement('div');
        header.className = 'md-modal-header';
        
        const titleElement = document.createElement('h2');
        titleElement.textContent = title || 'Story';
        
        const closeButton = document.createElement('button');
        closeButton.innerHTML = '&times;';
        closeButton.className = 'md-close-btn';
        closeButton.onclick = () => modal.remove();
        
        header.appendChild(titleElement);
        header.appendChild(closeButton);
        
        // Create body with markdown content
        const body = document.createElement('div');
        body.className = 'md-modal-body';
        body.innerHTML = mdContent;
        
        // Assemble modal
        modalContent.appendChild(header);
        modalContent.appendChild(body);
        modal.appendChild(modalContent);
        
        // Add to document
        document.body.appendChild(modal);
        
        // Close when clicking outside
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        });
        
        // Close on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && document.contains(modal)) {
                modal.remove();
            }
        });
    }
}

// Initialize the viewer
const mdViewer = new MarkdownViewer();

// Add event listeners to markdown links
document.addEventListener('DOMContentLoaded', function() {
    const mdLinks = document.querySelectorAll('a[href$=".md"]');
    
    mdLinks.forEach(link => {
        link.addEventListener('click', async function(e) {
            e.preventDefault();
            
            const url = this.getAttribute('href');
            const title = this.closest('.project-card').querySelector('.project-title').textContent;
            
            const mdContent = await mdViewer.loadMarkdown(url);
            mdViewer.displayInModal(mdContent, title);
        });
    });
});
