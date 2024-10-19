interface PictureProps {
    // Location of picture from public/pictures
    fileName: string;
    // Alt text for images
    altText: string;
    // Amount of circles
    circleAmount: number;
    // Size of each circle
    circleSizes: number[];
    // Location of all circles [vertical, horizontal]
    circleLocations: [number, number][];
}

const Picture: React.FC<PictureProps> = ({ fileName, altText, circleAmount, circleSizes, circleLocations }) => {
    // Edge case: different amount of circle sizes
    if (!circleSizes || circleAmount !== circleSizes.length) {
        console.log("Mismatch: circleAmount and circleSize Amount");
        return;
    }

    // Edge case: different amount of circle locations
    if (!circleLocations || circleAmount !== circleLocations.length) {
        console.log("Mismatch: circleAmount and circleLocations Amount");
        return;
    }

    // Circle Array used for generating circles
    const circleArray = Array.from({ length: circleAmount }, (_, index) => index);

    return (
        <div className="aspect-[1.15/1] bg-primary relative overflow-hidden">
            {circleArray.map(circle => (
                    <div
                        key={`circle-for-${fileName}-number-${circle}`}
                        className="aspect-square absolute bg-secondary rounded-full"
                        style={{
                            height: `${circleSizes[circle]}%`,
                            top: `${circleLocations[circle][0]}%`,
                            left: `${circleLocations[circle][1]}%`,
                            transform: 'translate(-50%, -50%)',
                        }}
                        
                    ></div>
                ))}
            <img
                className="w-full h-full object-cover absolute"
                src={`/pictures/${fileName}`}
                alt={altText}
            />
        </div>
    )
}

export default Picture;