import { Modal as ModalAnt } from "antd";

const Modal = ({ isModalOpen, handleCancel, item }: any) => {
  return (
    <ModalAnt
      title="Personal Information"
      visible={isModalOpen}
      onCancel={handleCancel}
      footer={null}
    >
      {item!! && (
        <div>
          <div style={{ textAlign: "center" }}>
            <h3>{item.name}</h3>
          </div>
          <hr />
          <div style={{ textAlign: "center" }}>
            <div>
              <b>Email</b>
              <p>{item.cc_email}</p>
            </div>
            <div>
              <b>Organization</b>
              <p>{item.org_name}</p>
            </div>
          </div>
        </div>
      )}
    </ModalAnt>
  );
};
export default Modal;
