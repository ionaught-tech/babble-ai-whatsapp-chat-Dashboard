import type { ActionTypeFormProps, sectionType } from "../ActionTypeForm";
import sectionDelete from "../../Assets/sectionDelete.svg";

const ListAction = ({
  formData,
  setFormData,
}: {
  formData: ActionTypeFormProps;
  setFormData: React.Dispatch<React.SetStateAction<ActionTypeFormProps>>;
}) => {
  const handleSectionChange = (
    sectionIndex: number,
    field: keyof sectionType,
    value: any
  ) => {
    const updatedSections = [...(formData.sections ?? [])];
    updatedSections[sectionIndex] = {
      ...updatedSections[sectionIndex],
      [field]: value,
    };

    setFormData((prev) => ({
      ...prev,
      sections: updatedSections,
    }));
  };

  const handleOptionChange = (
    sectionIndex: number,
    optionIndex: number,
    newValue: string
  ) => {
    const updatedSections = [...(formData.sections ?? [])];
    const options = [...(updatedSections[sectionIndex].options ?? [])];

    options[optionIndex] = newValue;
    updatedSections[sectionIndex].options = options;

    setFormData((prev) => ({
      ...prev,
      sections: updatedSections,
    }));
  };

  const addOptionToSection = (sectionIndex: number) => {
    const updatedSections = [...(formData.sections ?? [])];
    const options = [...(updatedSections[sectionIndex].options ?? [])];

    options.push("");
    updatedSections[sectionIndex].options = options;

    setFormData((prev) => ({
      ...prev,
      sections: updatedSections,
    }));
  };

  const removeOptionFromSection = (
    sectionIndex: number,
    optionIndex: number
  ) => {
    const updatedSections = [...(formData.sections ?? [])];
    const options = [...(updatedSections[sectionIndex].options ?? [])];

    options.splice(optionIndex, 1);
    updatedSections[sectionIndex].options = options;

    setFormData((prev) => ({
      ...prev,
      sections: updatedSections,
    }));
  };

  const addNewSection = () => {
    const updatedSections = [...(formData.sections ?? [])];
    updatedSections.push({ sectionTitle: "", options: [""] });

    setFormData((prev) => ({
      ...prev,
      sections: updatedSections,
    }));
  };

  const removeSection = (sectionIndex: number) => {
    if (sectionIndex === 0) return;

    const updatedSections = [...(formData.sections ?? [])];
    updatedSections.splice(sectionIndex, 1);

    setFormData((prev) => ({
      ...prev,
      sections: updatedSections,
    }));
  };

  const handleButtonChange = (newValue: string) => {
    const updatedButtons = [...(formData.interactiveButtons ?? [])];

    if (updatedButtons.length === 0) {
      updatedButtons.push({ buttonLabel: newValue });
    } else {
      updatedButtons[0] = {
        ...updatedButtons[0],
        buttonLabel: newValue,
      };
    }

    setFormData((prev) => ({
      ...prev,
      interactiveButtons: updatedButtons,
    }));
  };

  return (
    <div className="border-gray-300 grid gap-2 mt-4">
      <div className="mb-2">
        <span className="text-sm font-medium">Button</span>
      </div>
      <input
        type="text"
        placeholder="Button Label"
        value={formData.interactiveButtons?.[0]?.buttonLabel || ""}
        onChange={(e) => handleButtonChange(e.target.value)}
        className="w-full px-2 py-1 mb-2 border border-neutral-200 rounded"
      />
      <div className="flex justify-end">
        <button
          type="button"
          onClick={addNewSection}
          className="text-xs font-bold border border-neutral-200 px-4 py-2 rounded-lg"
        >
          + Add Section
        </button>
      </div>

      <div className="space-y-2">
        {formData.sections?.map((section, sectionIndex) => (
          <div key={sectionIndex} className="border p-3 rounded">
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs font-semibold">
                Section {sectionIndex + 1}
              </span>
              {sectionIndex !== 0 && (
                <button
                  type="button"
                  className="text-xs text-red-500"
                  onClick={() => removeSection(sectionIndex)}
                >
                  Remove Section
                </button>
              )}
            </div>
            <div className="w-full">
              <input
                type="text"
                placeholder="Section Title"
                value={section.sectionTitle}
                onChange={(e) =>
                  handleSectionChange(
                    sectionIndex,
                    "sectionTitle",
                    e.target.value
                  )
                }
                className="w-11/12 px-2 py-1 mb-2 border border-neutral-200 rounded"
              />
            </div>
            {section.options.map((option, optionIndex) => (
              <div
                key={optionIndex}
                className="flex justify-between gap-2 mb-1"
              >
                <input
                  type="text"
                  placeholder={`Option ${optionIndex + 1}`}
                  value={option}
                  onChange={(e) =>
                    handleOptionChange(
                      sectionIndex,
                      optionIndex,
                      e.target.value
                    )
                  }
                  className="w-11/12 px-2 py-1 border border-neutral-200 rounded"
                />
                {optionIndex > 0 && (
                  <button
                    className="cursor-pointer hover:scale-105"
                    type="button"
                    onClick={() =>
                      removeOptionFromSection(sectionIndex, optionIndex)
                    }
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
            ))}
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => addOptionToSection(sectionIndex)}
                className="text-xs font-bold mt-1 border border-neutral-200 px-3 py-1.5 rounded"
              >
                + Add Option
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListAction;
