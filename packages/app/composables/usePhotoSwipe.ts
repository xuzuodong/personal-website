import PhotoSwipeLightbox from 'photoswipe/lightbox'
import 'photoswipe/style.css'
import PhotoSwipeDynamicCaption from 'photoswipe-dynamic-caption-plugin'
import 'photoswipe-dynamic-caption-plugin/photoswipe-dynamic-caption-plugin.css'

export function usePhotoSwipe() {
    const photoSwipeEl = ref<HTMLDivElement>()

    let lightbox: any
    onMounted(() => {
        lightbox = new PhotoSwipeLightbox({
            gallery: photoSwipeEl.value,
            children: 'a',
            pswpModule: () => import('photoswipe'),
            loop: false,
            imageClickAction: 'zoom',
            tapAction: 'close',
            doubleTapAction: 'zoom',
            initialZoomLevel: 'fit',
            secondaryZoomLevel: 1,
        })

        // eslint-disable-next-line ts/no-unused-vars
        const captionPlugin = new PhotoSwipeDynamicCaption(lightbox, {
            type: 'below',
        })

        lightbox.init()
    })

    onUnmounted(() => {
        lightbox?.destroy()
        lightbox = null
    })

    return {
        photoSwipeEl,
    }
}
