import type { ActionTypeFormProps } from "../ActionTypeForm";
import sectionDelete from "../../Assets/sectionDelete.svg";
import { useEffect, useRef } from "react";

const ButtonsAction = ({
  formData,
  setFormData,
}: {
  formData: ActionTypeFormProps;
  setFormData: React.Dispatch<React.SetStateAction<ActionTypeFormProps>>;
}) => {
  const addNewInteractiveButton = () => {
    setFormData((prev) => ({
      ...prev,
      interactiveButtons: [
        ...(prev.interactiveButtons ?? []),
        { buttonLabel: "" },
      ],
    }));
  };

  const handleButtonChange = (index: number, newValue: string) => {
    const updated = [...(formData.interactiveButtons ?? [])];
    updated[index] = { buttonLabel: newValue };
    setFormData((prev) => ({ ...prev, interactiveButtons: updated }));
  };

  const removeButton = (index: number) => {
    const updated = [...(formData.interactiveButtons ?? [])];
    updated.splice(index, 1);
    setFormData((prev) => ({ ...prev, interactiveButtons: updated }));
  };
  // const [isLast, setIslast] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [formData.interactiveButtons?.length]);

  return (
    <div className="border border-gray-300 rounded-lg p-5 grid gap-2 mt-4">
      <div className="flex justify-end">
        {(formData.interactiveButtons?.length ?? 0) < 3 && (
          <button
            type="button"
            onClick={addNewInteractiveButton}
            className="font-bold text-xs border border-neutral-200 px-4 py-2 rounded-lg"
          >
            Add Button +
          </button>
        )}
      </div>

      {formData.interactiveButtons?.map((btnValue, btnIndex) => (
        <div key={btnIndex} className="rounded grid gap-2 ">
          <div className="text-sm font-medium">Button {btnIndex + 1}</div>
          <div className="flex justify-between gap-2">
            <input
              key={btnIndex}
              ref={
                btnIndex === (formData.interactiveButtons?.length ?? 0) - 1
                  ? inputRef
                  : null
              }
              type="text"
              placeholder="Button Label"
              value={btnValue.buttonLabel}
              onChange={(e) => handleButtonChange(btnIndex, e.target.value)}
              className="w-11/12 px-2 py-1 border border-neutral-200 rounded"
            />
            {btnIndex > 0 && (
              <button
                className="cursor-pointer hover:scale-105"
                type="button"
                onClick={() => removeButton(btnIndex)}
              >
                <img
                  src={sectionDelete}
                  alt="delete section"
                  width={15}
                  height={15}
                  className="w-4 h-4 object-contain"
                />
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ButtonsAction;
