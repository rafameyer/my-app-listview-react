import { Modal as ModalAnt } from "antd";
import IPerson from "../../interfaces/IPerson";
import * as Styles from "./Styles";

interface IModalProps {
  isModalOpen: boolean;
  handleCancel: () => void;
  item: IPerson | undefined;
}

const Modal = ({ isModalOpen, handleCancel, item }: IModalProps) => {
  return (
    <ModalAnt
      title="Personal Information"
      visible={isModalOpen}
      onCancel={handleCancel}
      footer={null}
    >
      {item!! && (
        <>
          <Styles.TextAlignCenter>
            <h3>{item.name}</h3>
          </Styles.TextAlignCenter>
          <hr />
          <Styles.TextAlignCenter>
            <div>
              <b>Email</b>
              <p>{item.cc_email}</p>
            </div>
            <div>
              <b>Organization</b>
              <p>{item.org_name}</p>
            </div>
          </Styles.TextAlignCenter>
        </>
      )}
    </ModalAnt>
  );
};
export default Modal;
