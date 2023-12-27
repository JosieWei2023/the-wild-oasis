import { useState } from "react";
import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";

function AddCabin() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <Button onClick={() => setShowModal((show) => !show)}>
        {" "}
        Add new cabin
      </Button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateCabinForm onCloseModal={() => setShowModal(false)} />
        </Modal>
      )}
    </div>
  );
}

export default AddCabin;
