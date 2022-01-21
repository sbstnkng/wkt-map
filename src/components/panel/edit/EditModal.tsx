import React, { useEffect, useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Title from './title';
import { Label, Wkt } from './input';
import { ItemType, MapItem } from '../../../types/Item';
import { wktToGeoJson, geoJsonToWkt } from '../../../utils/wktParser';
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
  const [wkt, setWkt] = useState<string | undefined>(undefined);
  const [isValid, setValid] = useState<boolean>(true);
  const shapeInput: React.Ref<any> = useRef();
  const isNewItem = item === null;

  useEffect(() => {
    setLabel(item?.label || 'New Coordinates');
    setWkt(geoJsonToWkt(item?.geoJson));

    if (shapeInput.current) {
      shapeInput.current.focus();
    }
  }, [item, show]);

  const validateWktShape = (wkt: string) => {
    let isValid = false;
    try {
      isValid = wktToGeoJson(wkt) !== undefined;
    } catch (error) {
      isValid = false;
    }

    setValid(isValid);
  };

  const resetStates = () => {
    setLabel('');
    setWkt('');
  };

  const handleSave = (e: any) => {
    e.preventDefault();

    if (isValid) {
      const geoJson = wktToGeoJson(wkt as string);

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
    <Modal size="lg" show={show} onHide={handleClose}>
      <Form onSubmit={handleSave}>
        <Modal.Header closeButton>
          <Title showAsEdit={!isNewItem} />
        </Modal.Header>
        <Modal.Body>
          <Label
            text={label}
            onChange={(event) => setLabel(event.target.value)}
          />
          <Wkt
            ref={shapeInput}
            wkt={wkt}
            isValid={isValid}
            onChange={(event) => setWkt(event.target.value)}
            onBlur={(event) => validateWktShape(event.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit" variant="primary" disabled={wkt === undefined}>
            <i className="fas fa-save"></i>
            <span className="mx-2">Save</span>
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};
