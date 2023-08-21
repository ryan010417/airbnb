'use client'

import useCountries from "@/app/hooks/useCountries"
import { IconType } from "react-icons"

import Avatar from "../Avatar"
import { SafeUser } from "@/app/types"
import ListingCategory from "./ListingCategory"
import dynamic from "next/dynamic"

const Map = dynamic(() => import('../Map'), {
    ssr:false
})

interface ListingInfoProps{
    user: SafeUser
    description: string
    guestCount: number
    bathroomCount: number
    roomCount: number
    category: {
        icon: IconType,
        label: string,
        description: string,
    } | undefined
    locationValue: string
}

const ListingInfo: React.FC<ListingInfoProps> = ({
    user,
    description,
    guestCount,
    bathroomCount,
    roomCount,
    locationValue,
    category
}) => {
    const { getByValue } = useCountries()
    
    const coordinates = getByValue(locationValue)?.latlng

    return (
        <div className="col-span-4 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
                <div
                    className="
                        text-xl
                        font-semibold
                        flex
                        flex-row
                        items-center
                        gap-2
                    "
                >
                    <div>Hosted by {user?.name}</div>
                    <Avatar src={user?.image}/>
                </div>
                <div
                    className="
                        flex
                        flex-row
                        items-center
                        gap-4
                        font-light
                        text-neutral-500
                    "
                >
                    <div>
                        {guestCount} guest
                    </div>
                    <div>
                        {roomCount} rooms
                    </div>
                    <div>
                        {bathroomCount} bathroom
                    </div>
                </div>
                <hr />
                {category && (
                    <ListingCategory
                        icon={category.icon}
                        label={category.label}
                        description={category.description}
                    />
                )}
                <hr />
                <div className="text-lg font-light text-neutral-500">
                    {description}
                </div>
                <hr />
                <Map center={coordinates}/>
            </div>
        </div>
    );
}
 
export default ListingInfo;