import { Card } from "antd";
import { useState } from "react";
import Modal from "../Modal/Modal";

const ListView = ({ items }: any) => {
  const [itemSelected, setItemSelected] = useState();

  const onClickCard = (item: any) => {
    showModal();
    setItemSelected(item);
  };

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {items?.map((item: any, index: number) => {
        return (
          <Card
            key={index}
            onClick={() => onClickCard(item)}
            style={{
              border: "1px solid darkgray",
              borderRadius: 2,
              height: 100,
              marginBottom: "5px",
            }}
          >
            <div
              style={{
                flexDirection: "row",
                marginLeft: "15px",
                marginRight: "15px",
              }}
            >
              <div style={{ float: "left" }}>
                <p>{item.name}</p>
                <p>{item.org_name}</p>
              </div>
              <div style={{ float: "right" }}>
                {/* <img src={logo} alt="avatar" style={{}} />; */}
              </div>
            </div>
          </Card>
        );
      })}
      <Modal
        isModalOpen={isModalOpen}
        handleCancel={handleCancel}
        item={itemSelected}
      />
    </div>
  );
};
export default ListView;
