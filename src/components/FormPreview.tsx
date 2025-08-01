import previewImage from "../Assets/preview.png";
import previewBackground from "../Assets/whatsapp-background.jpg";
import DoubleTick from "../Assets/doubleTick.svg";
import type { ActionTypeFormProps } from "./ActionTypeForm";

const FormPreview = ({ formData }: { formData: ActionTypeFormProps }) => {
  return (
    <div className="grid items-center">
      <div>
        <div className="text-lg font-semibold p-3 bg-gray-400">Preview</div>
        <div
          style={{ backgroundImage: `url(${previewBackground})` }}
          className="bg-cover bg-center flex items-center justify-center p-4 rounded-lg relative"
        >
          {formData.sections?.[0].sectionTitle && (
            <div>
              <div className="absolute inset-0 backdrop-blur-sm bg-black/40 z-30 " />
              <div className="absolute bottom-0 left-0 right-0 z-50 ">
                <div className="rounded-t-lg bg-white text-black text-sm shadow-lg p-2">
                  <div className="bg-white text-black text-sm shadow-lg">
                    {formData.sections?.map((section, sectionIndex) => (
                      <div
                        className="bg-gray-200 p-2 mb-3 rounded-md"
                        key={sectionIndex}
                      >
                        <div className="font-semibold text-base mb-2">
                          {section.sectionTitle}
                        </div>
                        <div className="grid gap-1">
                          {section.options.map((option, optionIndex) => (
                            <div
                              key={optionIndex}
                              className="flex items-center justify-between p-2 rounded-md bg-neutral-100 text-sm text-gray-800"
                            >
                              <div>{option}</div>
                              <div className="w-4 h-4 border-2 border-gray-500 rounded-full bg-gray-300" />
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 💬 Message preview box */}
          <div className="bg-white rounded-lg z-10">
            <div className="aspect-video pt-2 px-2">
              <img
                src={previewImage}
                alt="Image"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="w-full max-w-xs p-2">
              <div className="font-bold line-clamp-1 break-words">
                {formData.header}
              </div>
              <div className="line-clamp-3 break-words">{formData.body}</div>
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
            {formData.interactiveButtons?.[0]?.buttonLabel &&
              formData.interactiveButtons.map((button, index) => (
                <div
                  key={index}
                  className="text-xs text-sky-600 font-normal border-t border-neutral-400 py-3 px-6 text-center"
                >
                  {button.buttonLabel}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormPreview;
