document.addEventListener("DOMContentLoaded", function() {
    const accordionHeaders = document.querySelectorAll(".accordion-header");

    // Add click event listener to each header
    accordionHeaders.forEach(header => {
        header.addEventListener("click", function() {
            const accordionItem = this.parentElement;
            const accordionContent = accordionItem.querySelector(".accordion-content");

            // Toggle the active class on the clicked item
            accordionItem.classList.toggle("active");

            // Close any other open items
            accordionHeaders.forEach(otherHeader => {
                if (otherHeader !== this && otherHeader.parentElement.classList.contains("active")) {
                    otherHeader.parentElement.classList.remove("active");
                    otherHeader.parentElement.querySelector(".accordion-content").style.maxHeight = 0;
                    otherHeader.parentElement.querySelector(".accordion-content").style.padding = 0;
                }
            });

            // Open or close the clicked item
            if (accordionItem.classList.contains("active")) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
            } else {
                accordionContent.style.maxHeight = 0;
                accordionContent.style.padding = 0;
            }
        });
    });
});