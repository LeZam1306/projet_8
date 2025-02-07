document.addEventListener("DOMContentLoaded", () => {
    const section = document.getElementById("gallery")

    const observation = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting){
            
            $(document).ready(function() {

                $('.gallery').mauGallery({
                    columns: {
                        xs: 1,
                        sm: 2,
                        md: 3,
                        lg: 3,
                        xl: 3
                    },
                    lightBox: true,
                    lightboxId: 'myAwesomeLightbox',
                    showTags: true,
                    tagsPosition: 'top'
                });
            
            });
            
            observation.disconnect();
        }
    })
    observation.observe(section);
}); 
