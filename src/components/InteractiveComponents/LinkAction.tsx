import type { ActionTypeFormProps } from "../ActionTypeForm";

const LinkAction = ({
  formData,
  setFormData,
}: {
  formData: ActionTypeFormProps;
  setFormData: React.Dispatch<React.SetStateAction<ActionTypeFormProps>>;
}) => {
  const handleButtonLabelChange = (newValue: string) => {
    setFormData((prev) => {
      const updatedButtons = prev.interactiveButtons?.length
        ? [...prev.interactiveButtons]
        : [{ buttonLabel: "" }];

      updatedButtons[0] = {
        ...updatedButtons[0],
        buttonLabel: newValue,
      };

      return {
        ...prev,
        interactiveButtons: updatedButtons,
      };
    });
  };
  const handleButtonContentChange = (newValue: string) => {
    setFormData((prev) => {
      const updatedButtons = prev.interactiveButtons?.length
        ? [...prev.interactiveButtons]
        : [{ buttonLabel: "", buttonContent: "" }];

      updatedButtons[0] = {
        ...updatedButtons[0],
        buttonContent: newValue,
      };

      return {
        ...prev,
        interactiveButtons: updatedButtons,
      };
    });
  };

  return (
    <div className="border border-gray-300 rounded-lg p-5 mt-4">
      <div className="mb-2 text-sm font-medium">Button Label</div>
      <input
        type="text"
        placeholder="Enter button label"
        value={formData.interactiveButtons?.[0]?.buttonLabel || ""}
        onChange={(e) => handleButtonLabelChange(e.target.value)}
        className="w-full px-2 py-1 border border-neutral-200 rounded"
      />
      <div className="mb-2 text-sm font-medium">URL</div>
      <input
        type="text"
        placeholder="Enter button label"
        value={formData.interactiveButtons?.[0]?.buttonContent || ""}
        onChange={(e) => handleButtonContentChange(e.target.value)}
        className="w-full px-2 py-1 border border-neutral-200 rounded"
      />
    </div>
  );
};

export default LinkAction;
