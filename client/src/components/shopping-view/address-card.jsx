import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Label } from "../ui/label";

function AddressCard({
  addressInfo,
  handleDeleteAddress,
  handleEditAddress,
  setCurrentSelectedAddress,
  selectedId,
}) {
  return (
    <Card
      onClick={
        setCurrentSelectedAddress
          ? () => setCurrentSelectedAddress(addressInfo)
          : null
      }
      className={`cursor-pointer border-red-700 ${
        selectedId?._id === addressInfo?._id
          ? "border-red-900 border-[4px]"
          : "border-black"
      }`}
    >
      <CardContent className="grid p-4 gap-4">
        <Label>Address: {addressInfo?.address}</Label>
        <Label>ville: {addressInfo?.city}</Label>
        <Label>pincode: {addressInfo?.pincode}</Label>
        <Label>telePhone: {addressInfo?.phone}</Label>
        <Label>Notes: {addressInfo?.notes}</Label>
      </CardContent>
      <CardFooter className="p-3 flex justify-between">
        <Button onClick={() => handleEditAddress(addressInfo)}>Editer</Button>
        <Button onClick={() => handleDeleteAddress(addressInfo)}>suprimer</Button>
      </CardFooter>
    </Card>
  );
}

export default AddressCard;
