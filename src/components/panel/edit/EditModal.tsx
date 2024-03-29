import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Title from './title';
import { Color, Label, LatLon, Wkt } from './input';
import { GeoJSON } from '../../../types/Geo';
import { ItemType, MapItem } from '../../../types/Item';
import { ADD_ITEM, MODIFY_ITEM } from '../../../redux/actionTypes';
import styles from './EditModal.module.css';

interface Props {
  show: boolean;
  item: MapItem | null;
  handleClose: () => void;
}

const DEFAULT_COLOR = '#008080';

export const EditModal: React.FC<Props> = ({
  show,
  item,
  handleClose,
}: Props) => {
  const dispatch = useDispatch();
  const [label, setLabel] = useState('');
  const [color, setColor] = useState(DEFAULT_COLOR);
  const [geoJson, setGeoJson] = useState<GeoJSON | undefined>(undefined);
  const [isValid, setValid] = useState<boolean>(true);
  const isNewItem = item === null;

  useEffect(() => {
    setLabel(item?.label || 'New Coordinates');
    setColor(item?.color || DEFAULT_COLOR);
    setGeoJson(item?.geoJson);
  }, [item, show]);

  const isGeoJsonPoint = (geoJson: GeoJSON | undefined): boolean => {
    if (geoJson === undefined) return true;

    return geoJson.type === ItemType.POINT;
  };

  const saveGeoJson = (geoJson: GeoJSON | undefined) => {
    setGeoJson(geoJson);
    setValid(geoJson !== undefined);
  };

  const resetStates = () => {
    setLabel('');
    setGeoJson(undefined);
    setValid(true);
    setColor(DEFAULT_COLOR);
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
          color,
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
          color,
          geoJson,
          isVisible: true,
          type: geoJson?.type as ItemType,
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
    <Modal
      size="lg"
      show={show}
      onHide={handleCloseInternal}
      contentClassName={styles.modal}
    >
      <Form onSubmit={handleSave}>
        <Modal.Header closeButton>
          <Title showAsEdit={!isNewItem} />
        </Modal.Header>
        <Modal.Body>
          <Label
            text={label}
            onChange={(event) => setLabel(event.target.value)}
          />
          <Color color={color} onChange={setColor} />
          <Tabs defaultActiveKey="wkt" className="mt-3">
            <Tab eventKey="wkt" title="WKT">
              <Wkt
                geoJson={geoJson}
                isValid={isValid}
                saveGeoJson={saveGeoJson}
              />
            </Tab>
            <Tab
              eventKey="latlon"
              title="Lat / Lon"
              disabled={!isGeoJsonPoint(geoJson)}
            >
              <LatLon geoJson={geoJson} saveGeoJson={saveGeoJson} />
            </Tab>
          </Tabs>
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
