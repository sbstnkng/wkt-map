import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Title from './title';
import { Label, Wkt } from './input';
import { GeoJSON } from '../../../types/Geo';
import { ItemType, MapItem } from '../../../types/Item';
import { ADD_ITEM, MODIFY_ITEM } from '../../../redux/actionTypes';

interface Props {
  show: boolean;
  item: MapItem | null;
  handleClose: () => void;
}

export const EditModal: React.FC<Props> = ({
  show,
  item,
  handleClose,
}: Props) => {
  const dispatch = useDispatch();
  const [label, setLabel] = useState('');
  const [geoJson, setGeoJson] = useState<GeoJSON | undefined>(undefined);
  const [isValid, setValid] = useState<boolean>(true);
  const isNewItem = item === null;

  useEffect(() => {
    setLabel(item?.label || 'New Coordinates');
    setGeoJson(item?.geoJson);
  }, [item, show]);

  const saveGeoJson = (geoJson: GeoJSON | undefined) => {
    setGeoJson(geoJson);
    setValid(geoJson !== undefined);
  };

  const resetStates = () => {
    setLabel('');
    setGeoJson(undefined);
    setValid(true);
  };

  const handleCloseInternal = () => {
    resetStates();
    handleClose();
  };

  const handleSave = (e: any) => {
    e.preventDefault();

    if (isValid) {
      if (item) {
        const modifiedItem: MapItem = {
          ...item,
          label,
          geoJson,
          type: geoJson?.type as ItemType,
        };
        dispatch({
          type: MODIFY_ITEM,
          payload: { id: modifiedItem.id, item: modifiedItem },
        });
      } else {
        const newItem = {
          label,
          geoJson,
          isVisible: true,
          type: geoJson?.type as ItemType,
          color: '',
        };

        dispatch({
          type: ADD_ITEM,
          payload: { item: newItem },
        });
      }

      resetStates();
      handleClose();
    }
  };

  return (
    <Modal size="lg" show={show} onHide={handleCloseInternal}>
      <Form onSubmit={handleSave}>
        <Modal.Header closeButton>
          <Title showAsEdit={!isNewItem} />
        </Modal.Header>
        <Modal.Body>
          <Label
            text={label}
            onChange={(event) => setLabel(event.target.value)}
          />
          <Wkt geoJson={geoJson} isValid={isValid} saveGeoJson={saveGeoJson} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseInternal}>
            Cancel
          </Button>
          <Button
            type="submit"
            variant="primary"
            disabled={geoJson === undefined}
          >
            <i className="fas fa-save"></i>
            <span className="mx-2">Save</span>
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};
