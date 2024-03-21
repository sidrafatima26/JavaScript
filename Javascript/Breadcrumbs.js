// Sample breadcrumb data (can be replaced with actual data)
const breadcrumbData = [
    { text: 'Home', url: '/' },
    { text: 'Products', url: '/products' },
    { text: 'Category', url: '/products/category' },
    { text: 'Product Page', url: '/products/category/product-page' }
];

// Function to render breadcrumbs
function renderBreadcrumbs(targetElement, breadcrumbs) {
    const breadcrumbsList = document.createElement('ul');
    breadcrumbsList.classList.add('breadcrumbs');

    breadcrumbs.forEach((crumb, index) => {
        const crumbItem = document.createElement('li');
        const crumbLink = document.createElement('a');
        
        crumbLink.textContent = crumb.text;
        crumbLink.setAttribute('href', crumb.url);

        crumbItem.appendChild(crumbLink);
        breadcrumbsList.appendChild(crumbItem);

        // Add arrow separator except for the last item
        if (index < breadcrumbs.length - 1) {
            const separator = document.createElement('span');
            separator.textContent = '>';
            crumbItem.appendChild(separator);
        }
    });

    targetElement.innerHTML = '';
    targetElement.appendChild(breadcrumbsList);
}

// Render the breadcrumbs
const breadcrumbsContainer = document.getElementById('breadcrumbs');
renderBreadcrumbs(breadcrumbsContainer, breadcrumbData);
