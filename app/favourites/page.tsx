import EmptyState from "../components/EmptyState";
import ClientOnly from "../components/ClientOnly";

import getCurrentUser from "../actions/getCurrentUser";
import getFavouriteListings from "../actions/getFavouriteListings";
import FavouritesClient from "./FavouritesClient";

const ListingPage = async () => {

    const listings = await getFavouriteListings()
    const currentUser = await getCurrentUser();

    if (listings.length === 0) {
        return (
            <ClientOnly>
                <EmptyState
                    title="No Favourites Found"
                    subtitle="Looks like you had not favourited anything"
                />
            </ClientOnly>
        )
    }
    return ( 
        <ClientOnly>
            <FavouritesClient
                listings={listings}
                currentUser={currentUser}
            />
        </ClientOnly>
     );
}
 
export default ListingPage;