import { FaHeart } from "react-icons/fa";

export const AddFavourites = () => {
  return (
    <div className="flex items-center">
        <span >Agregar a favoritos</span>
        <FaHeart className="pt-1 flex-none" color="red"/>
    </div>
  )
}
