import previewImage from "../Assets/preview.png";
import previewBackground from "../Assets/whatsapp-background.jpg";
import DoubleTick from "../Assets/doubleTick.svg";
import { useState } from "react";
import ButtonsAction from "./InteractiveComponents/ButtonsAction";
import LocationAction from "./InteractiveComponents/LocationAction";
import ListAction from "./InteractiveComponents/ListAction";
import AddressAction from "./InteractiveComponents/AddressAction";

export type sectionType = {
  sectionTitle: string;
  options: string[];
};

export type interactiveButtonsProps = {
  buttonLabel: string;
  body?: sectionType[];
};

export type ActionTypeFormProps = {
  header: string;
  body: string;
  footer: string;
  actionType: string;
  interactiveButtons: interactiveButtonsProps[];
};

const actionTypes = ["Buttons", "List", "Link", "Address", "Location"];

const ActionTypeForm = () => {
  const [formData, setFormData] = useState<ActionTypeFormProps>({
    header: "",
    body: "",
    footer: "",
    actionType: "Buttons",
    interactiveButtons: [
      {
        buttonLabel: "",
        body: [
          {
            sectionTitle: "",
            options: [""],
          },
        ],
      },
    ],
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleActionTypeChange = (type: string) => {
    setFormData((prev) => ({
      ...prev,
      actionType: type,
      interactiveButtons: [
        {
          buttonLabel: "",
          body: [
            {
              sectionTitle: "",
              options: [""],
            },
          ],
        },
      ],
    }));
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center ">
      <form
        onClick={(e) => e.stopPropagation()}
        className="grid  grid-cols-[3fr_2fr] bg-white rounded-xl p-6 gap-6 max-w-5xl w-full  overflow-y-auto max-h-11/12 "
      >
        <div className="grid">
          <div className="text-lg font-semibold mb-1">Content</div>
          <div className="text-sm text-gray-600 mb-4">
            Fill out the header, body and footer sections
          </div>

          <div className="flex gap-2">
            {actionTypes.map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => handleActionTypeChange(type)}
                className={`border rounded border-neutral-200 hover:bg-neutral-300 font-bold text-xs px-4 py-2 ${
                  formData.actionType === type ? "bg-neutral-200" : ""
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          <label htmlFor="Header" className="block mt-2 font-medium">
            Header
          </label>
          <input
            name="header"
            value={formData.header}
            onChange={handleChange}
            type="text"
            className="w-full border border-gray-300 rounded px-2 py-1"
          />

          <label htmlFor="Body" className="block mt-2 font-medium">
            Body
          </label>
          <textarea
            name="body"
            value={formData.body}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-2 py-1"
          />

          <label htmlFor="Footer" className="block mt-2 font-medium ">
            Footer
          </label>
          <input
            name="footer"
            value={formData.footer}
            onChange={handleChange}
            type="text"
            className="w-full border border-gray-200 rounded px-2 py-1"
          />
          {formData.actionType === "Buttons" && (
            <ButtonsAction formData={formData} setFormData={setFormData} />
          )}
          {formData.actionType === "Location" && (
            <LocationAction formData={formData} setFormData={setFormData} />
          )}
          {formData.actionType === "List" && (
            <ListAction formData={formData} setFormData={setFormData} />
          )}
          {formData.actionType === "Address" && (
            <AddressAction formData={formData} setFormData={setFormData} />
          )}

          <div className="flex justify-end">
            <button
              type="submit"
              className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Create
            </button>
          </div>
        </div>

        <div className="grid items-center">
          <div>
            <div className="text-lg font-semibold p-3 bg-gray-400">Preview</div>
            <div
              style={{ backgroundImage: `url(${previewBackground})` }}
              className="bg-cover bg-center flex items-center justify-center  p-4 rounded-lg"
            >
              <div className="p-2 bg-white rounded-lg">
                <div className="aspect-video">
                  <img
                    src={previewImage}
                    alt="Image"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="w-full max-w-xs">
                  {" "}
                  <div className="font-bold line-clamp-1 break-words">
                    {formData.header}
                  </div>
                  <div className="line-clamp-3 break-words">
                    {formData.body}
                  </div>
                  <div className="text-xs text-gray-500 flex justify-between">
                    <div className="line-clamp-1 break-words max-w-[70%]">
                      {formData.footer}
                    </div>
                    <div className="flex gap-1 shrink-0 items-center">
                      <div>10:56 am</div>
                      <img
                        src={DoubleTick}
                        alt="Double Tick"
                        width={12}
                        height={12}
                        className="w-3 h-3 object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
export default ActionTypeForm;
