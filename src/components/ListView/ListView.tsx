import { Card } from "antd";
import { useState } from "react";
import IPerson from "../../interfaces/IPerson";
import Modal from "../Modal/Modal";
import * as Styles from "./Styles";

interface IListViewProps {
  items: IPerson[];
}

const ListView = ({ items }: IListViewProps) => {
  const [itemSelected, setItemSelected] = useState<IPerson | undefined>();

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
    <Styles.Struct>
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
            <Styles.CardContent>
              <Styles.LeftWrapperElement>
                <p>{item.name}</p>
                <p>{item.org_name}</p>
              </Styles.LeftWrapperElement>
            </Styles.CardContent>
          </Card>
        );
      })}
      <Modal
        isModalOpen={isModalOpen}
        handleCancel={handleCancel}
        item={itemSelected}
      />
    </Styles.Struct>
  );
};
export default ListView;
