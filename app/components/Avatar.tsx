'use client'

interface AvatarProps {
    src?: string | null | undefined
}

import Image from "next/image";

const Avatar: React.FC<AvatarProps> = ({
    src
}) => {
    return ( 
        <Image
            className="rounded-full"
            width={30}
            height={30}
            alt="avatar"
            src={src || '/images/placeholder.jpg'}
        />
     );
}

export default Avatar;