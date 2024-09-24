import type { FC } from 'react';
import { Checkpoint as CheckpointType } from '../../api';
import { formatDate } from '../../utlis/date';
interface CheckpointProps {
  checkpoint: CheckpointType;
}

const Checkpoint: FC<CheckpointProps> = ({ checkpoint }) => {
  return (
    <div className="mb-2">
      <div className="text-sm ">{checkpoint.status}</div>
      <div className="text-xs py-2">{checkpoint.status_details}</div>
      <div className="flex text-gray-400 text-xs">
        <div>{checkpoint.city}</div>
        <div className="grow"></div>
        <div>{formatDate(new Date(checkpoint.event_timestamp))}</div>
      </div>
    </div>
  );
};

export default Checkpoint;
