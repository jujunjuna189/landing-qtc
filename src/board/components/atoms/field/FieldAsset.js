import Button from "../button/Button";

const FieldAsset = (props) => {
    let reader = new FileReader();

    const handleInputChange = (event) => {
        const file = event.target.files[0];
        if (!file) {
            console.log('Please select a file.');
            return false;
        }

        const randomString = Math.random().toString(36).substring(2, 8);
        const fileName = Date.now() + '-' + randomString;

        // Cek apakah file adalah gambar atau video
        const isImage = file.name.match(/\.(jpg|jpeg|png|JPG|JPEG|PNG|gif|webp)$/);
        const isVideo = file.name.match(/\.(mp4|webm|mkv|avi|mov|flv|wmv|m4v)$/);

        if (!isImage && !isVideo) {
            console.log('Please select a valid image or video file.');
            return false;
        }

        // Handle Image
        if (isImage) {
            reader.onload = (e) => {
                const img = new Image();
                img.onload = () => {
                    // Resize image
                    const canvas = document.createElement('canvas');
                    const ctx = canvas.getContext("2d");

                    const MAX_WIDTH = img.width;
                    const MAX_HEIGHT = img.height;
                    let width = MAX_WIDTH;
                    let height = MAX_HEIGHT;

                    if (width > height) {
                        if (width > MAX_WIDTH) {
                            height *= MAX_WIDTH / width;
                            width = MAX_WIDTH;
                        }
                    } else {
                        if (height > MAX_HEIGHT) {
                            width *= MAX_HEIGHT / height;
                            height = MAX_HEIGHT;
                        }
                    }

                    canvas.width = width;
                    canvas.height = height;
                    ctx.drawImage(img, 0, 0, width, height);

                    canvas.toBlob((blob) => {
                        const resizedFile = new File([blob], fileName + '.webp', {
                            type: "image/webp",
                            lastModified: Date.now(),
                        });

                        const dataBatch = {
                            file: resizedFile,
                            type: 'image',
                            dimension: `${MAX_WIDTH}x${MAX_HEIGHT}`,
                            preview: URL.createObjectURL(resizedFile),
                            width: MAX_WIDTH,
                            height: MAX_HEIGHT,
                        };
                        props.onChange && props.onChange(dataBatch);
                    }, "image/webp", 0.99);
                };

                img.onerror = () => {
                    console.log('Invalid image content.');
                };

                img.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }

        // Handle Video
        if (isVideo) {
            const videoElement = document.createElement('video');
            videoElement.src = URL.createObjectURL(file);

            videoElement.onloadedmetadata = () => {
                const videoData = {
                    file: file,
                    type: 'video',
                    dimension: `${videoElement.videoWidth}x${videoElement.videoHeight}`,
                    preview: URL.createObjectURL(file),
                    duration: videoElement.duration,
                    width: videoElement.videoWidth,
                    height: videoElement.videoHeight,
                };
                props.onChange && props.onChange(videoData);
            };

            videoElement.onerror = () => {
                console.log('Invalid video content.');
            };
        }
    };

    return (
        <div className="flex flex-col">
            <div className="flex justify-start">
                <Button className="border hover:bg-slate-100 relative text-white-light">
                    <input type="file" accept="image/*,video/*" className="absolute left-0 top-0 right-0 bottom-0 border opacity-0 cursor-pointer w-full" onChange={(event) => handleInputChange(event)} />
                    {props.label ?? 'Upload Photo'}
                </Button>
            </div>
            {props.error && <small className="text-red-800 pl-1">{props.error}</small>}
        </div>
    );
}
export default FieldAsset;