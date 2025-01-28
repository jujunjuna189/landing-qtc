export const LinkChecker = {
    getFileType(url) {
        if(!url) return null;
        const imageExtensions = ["jpg", "jpeg", "png", "gif", "webp", "bmp", "svg"];
        const videoExtensions = ["mp4", "mkv", "webm", "mov", "avi", "flv", "wmv", "m4v"];
        
        const extension = this.getFileExtension(url);
        
        if (imageExtensions.includes(extension)) {
            return "image";
        } else if (videoExtensions.includes(extension)) {
            return "video";
        }
        return null; // Jika bukan image atau video
    },
    getFileExtension(url) {
        // Ekstrak ekstensi file dari URL
        const match = url.match(/\.([a-zA-Z0-9]+)(\?.*)?$/);
        return match ? match[1].toLowerCase() : null;
    }
}