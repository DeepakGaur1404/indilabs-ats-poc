import React from "react";
import { RiCloseLine } from "react-icons/ri";

type Props = {
  onCancel: () => void;
  onConfirm: () => void;
};

const UnsavedChangesModal: React.FC<Props> = (props) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-800">
            Are you sure you want to leave?
          </h2>
          <button onClick={() => props.onCancel()}>
            <RiCloseLine className="text-gray-500" />
          </button>
        </div>
        <p className="text-sm text-gray-600">
          You have unsaved changes. If you leave, your changes will be lost.
        </p>
        <div className="flex justify-end mt-6">
          <button
            onClick={() => props.onCancel()}
            className="px-4 py-2 text-sm text-gray-700 bg-gray-200 rounded-md mr-4"
          >
            Cancel
          </button>
          <button
            onClick={() => props.onConfirm()}
            className="px-4 py-2 text-sm text-white bg-blue-500 rounded-md"
          >
            Leave
          </button>
        </div>
      </div>
    </div>
  );
};

export default UnsavedChangesModal;
