import type { ActionTypeFormProps } from "../ActionTypeForm";

const LocationAction = ({
  formData,
  setFormData,
}: {
  formData: ActionTypeFormProps;
  setFormData: React.Dispatch<React.SetStateAction<ActionTypeFormProps>>;
}) => {
  const handleButtonChange = (newValue: string) => {
    setFormData((prev) => ({
      ...prev,
      interactiveButtons: [
        ...prev.interactiveButtons,
        { buttonLabel: newValue },
      ],
    }));
  };

  return (
    <div className="border border-gray-300 rounded-lg p-5 mt-4">
      <div className="mb-2 text-sm font-medium">Button Label</div>
      <input
        type="text"
        placeholder="Enter button label"
        value={formData.interactiveButtons[0]?.buttonLabel || ""}
        onChange={(e) => handleButtonChange(e.target.value)}
        className="w-full px-2 py-1 border border-neutral-200 rounded"
      />
    </div>
  );
};

export default LocationAction;
