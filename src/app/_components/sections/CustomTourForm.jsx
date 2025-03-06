import React from "react";
import InputField from "../form-controls/InputField";
import TextareaField from "../form-controls/TextareaField";
import ComboboxField from "../form-controls/ComboboxField";
import ComboboxFieldV2 from "../form-controls/ComboboxFieldV2";
import DatePickerField from "../form-controls/DatePickerField";

export default function CustomTourForm() {
  return (
    <div className="relative bg-[white]  max-md:!overflow-x-hidden md:w-fit overflow-y-auto">
      <div className="overflow-y-auto flex gap-[1rem]">
        <div className="w-[34.75rem] h-fit grid grid-cols-4 gap-y-[0.75rem] gap-x-[0.5rem]">
          <div className="col-span-full grid grid-cols-2 gap-[0.5rem]">
            <h4 className="col-span-full text-[0.875rem] font-bold tracking-[0.00875rem] leading-[1.2rem] text-[#2e2e2e]">
              Customer information:
            </h4>
            <div className="col-span-full">
              <InputField placeholder="Peter Nguyen Tuan Anh" />
            </div>
            <div className="col-span-1">
              <InputField placeholder="(Whatsapp)+84 *" />
            </div>
            <div className="col-span-1">
              <InputField placeholder="Email *" />
            </div>
            <div className="col-span-full">
              <TextareaField placeholder="Message" rows={2} />
            </div>
          </div>
          <div className="col-span-2">
            <h4 className="mb-[0.5rem] col-span-full text-[0.875rem] font-bold tracking-[0.00875rem] leading-[1.2rem] text-[#2e2e2e]">
              Type of tour:
            </h4>
            <ComboboxFieldV2
              values={[
                { id: 1, value: "Item 1" },
                { id: 2, value: "Item 2" },
                { id: 3, value: "Item 3" },
              ]}
              defaultValue={"Item 1"}
            />
          </div>
          <div className="col-span-2">
            <h4 className="mb-[0.5rem] col-span-full text-[0.875rem] font-bold tracking-[0.00875rem] leading-[1.2rem] text-[#2e2e2e]">
              Choose days:
            </h4>
            <ComboboxFieldV2
              values={[
                { id: 1, value: "Item 1" },
                { id: 2, value: "Item 2" },
                { id: 3, value: "Item 3" },
              ]}
              defaultValue={"Item 1"}
            />
          </div>
          <div className="col-span-1">
            <h4 className="mb-[0.5rem] col-span-full text-[0.875rem] font-bold tracking-[0.00875rem] leading-[1.2rem] text-[#2e2e2e]">
              Pick up
            </h4>
            <ComboboxFieldV2
              values={[
                { id: 1, value: "Item 1" },
                { id: 2, value: "Item 2" },
                { id: 3, value: "Item 3" },
              ]}
              defaultValue={"Item 1"}
            />
          </div>
          <div className="col-span-1">
            <h4 className="mb-[0.5rem] col-span-full text-[0.875rem] font-bold tracking-[0.00875rem] leading-[1.2rem] text-[#2e2e2e]">
              Pick up
            </h4>
            <DatePickerField />
          </div>
          <div className="col-span-2">
            <h4 className="mb-[0.5rem] col-span-full text-[0.875rem] font-bold tracking-[0.00875rem] leading-[1.2rem] text-[#2e2e2e]">
              Pick up
            </h4>
            <InputField placeholder="Address" />
          </div>
          <div className="col-span-1">
            <h4 className="mb-[0.5rem] col-span-full text-[0.875rem] font-bold tracking-[0.00875rem] leading-[1.2rem] text-[#2e2e2e]">
              Pick up
            </h4>
            <ComboboxFieldV2
              values={[
                { id: 1, value: "Item 1" },
                { id: 2, value: "Item 2" },
                { id: 3, value: "Item 3" },
              ]}
              defaultValue={"Item 1"}
            />
          </div>
          <div className="col-span-1">
            <h4 className="mb-[0.5rem] col-span-full text-[0.875rem] font-bold tracking-[0.00875rem] leading-[1.2rem] text-[#2e2e2e]">
              Pick up
            </h4>
            <DatePickerField />
          </div>
          <div className="col-span-2">
            <h4 className="mb-[0.5rem] col-span-full text-[0.875rem] font-bold tracking-[0.00875rem] leading-[1.2rem] text-[#2e2e2e]">
              Pick up
            </h4>
            <ComboboxFieldV2
              values={[
                { id: 1, value: "Item 1" },
                { id: 2, value: "Item 2" },
                { id: 3, value: "Item 3" },
              ]}
              defaultValue={"Item 1"}
            />
          </div>
        </div>
        <div className="w-[35.5rem] py-[1.5rem] pl-[0.75rem] pr-[1.5rem]">
          <div className="mb-[1.25rem] gap-[0.75rem] flex flex-col">
            <h4 className="text-[#262626]/40 text-[0.875rem] font-bold leading-[1.2] tracking-[0.00875rem]">
              Confirmed tour booking
            </h4>
            <div className="bg-[#F8F8F8] rounded-[0.5rem] border-[0.5px] border-solid border-[#eee]">
              <div className="w-full flex">
                <div className="h-[2.5rem] flex items-center w-[12.1875rem] max-md:w-[7.4375rem] py-[0.5rem] px-[1rem] border-b-[0.5px] border-r-[0.5px] border-solid border-[#eee] font-extrabold text-[0.875rem] text-[#2E2E2E]">
                  Type of tour
                </div>
                <div className="max-w-[20rem] max-md:max-w-[14.53125rem] w-[20rem] line-clamp-2 text-ellipsis flex flex-1 items-center h-[2.5rem] py-[0.5rem] px-[1rem] border-b-[0.5px] border-solid border-[#eee] text-[0.75rem] text-[#727272]">
                  Ha Giang Loop tour 2d3n: Best Budget in 2 days 3 nights
                </div>
              </div>
              <div className="w-full flex">
                <div className="h-[2.5rem] flex items-center w-[12.1875rem] max-md:w-[7.4375rem] py-[0.5rem] px-[1rem] border-b-[0.5px] border-r-[0.5px] border-solid border-[#eee] font-extrabold text-[0.875rem] text-[#2E2E2E]">
                  Type of tour
                </div>
                <div className="max-w-[20rem] max-md:max-w-[14.53125rem] w-[20rem] line-clamp-2 text-ellipsis flex flex-1 items-center h-[2.5rem] py-[0.5rem] px-[1rem] border-b-[0.5px] border-solid border-[#eee] text-[0.75rem] text-[#727272]">
                  Ha Giang Loop tour 2d3n: Best Budget in 2 days 3 nights
                </div>
              </div>
              <div className="w-full flex">
                <div className="h-[2.5rem] flex items-center w-[12.1875rem] max-md:w-[7.4375rem] py-[0.5rem] px-[1rem] border-b-[0.5px] border-r-[0.5px] border-solid border-[#eee] font-extrabold text-[0.875rem] text-[#2E2E2E]">
                  Type of tour
                </div>
                <div className="max-w-[20rem] max-md:max-w-[14.53125rem] w-[20rem] line-clamp-2 text-ellipsis flex flex-1 items-center h-[2.5rem] py-[0.5rem] px-[1rem] border-b-[0.5px] border-solid border-[#eee] text-[0.75rem] text-[#727272]">
                  Ha Giang Loop tour 2d3n: Best Budget in 2 days 3 nights
                </div>
              </div>
              <div className="w-full flex">
                <div className="h-[2.5rem] flex items-center w-[12.1875rem] max-md:w-[7.4375rem] py-[0.5rem] px-[1rem] border-b-[0.5px] border-r-[0.5px] border-solid border-[#eee] font-extrabold text-[0.875rem] text-[#2E2E2E]">
                  Type of tour
                </div>
                <div className="max-w-[20rem] max-md:max-w-[14.53125rem] w-[20rem] line-clamp-2 text-ellipsis flex flex-1 items-center h-[2.5rem] py-[0.5rem] px-[1rem] border-b-[0.5px] border-solid border-[#eee] text-[0.75rem] text-[#727272]">
                  Ha Giang Loop tour 2d3n: Best Budget in 2 days 3 nights
                </div>
              </div>
              <div className="w-full flex">
                <div className="h-[2.5rem] flex items-center w-[12.1875rem] max-md:w-[7.4375rem] py-[0.5rem] px-[1rem] border-b-[0.5px] border-r-[0.5px] border-solid border-[#eee] font-extrabold text-[0.875rem] text-[#2E2E2E]">
                  Type of tour
                </div>
                <div className="max-w-[20rem] max-md:max-w-[14.53125rem] w-[20rem] line-clamp-2 text-ellipsis flex flex-1 items-center h-[2.5rem] py-[0.5rem] px-[1rem] border-b-[0.5px] border-solid border-[#eee] text-[0.75rem] text-[#727272]">
                  Ha Giang Loop tour 2d3n: Best Budget in 2 days 3 nights
                </div>
              </div>
              <div className="w-full flex">
                <div className="h-[2.5rem] flex items-center w-[12.1875rem] max-md:w-[7.4375rem] py-[0.5rem] px-[1rem] border-b-[0.5px] border-r-[0.5px] border-solid border-[#eee] font-extrabold text-[0.875rem] text-[#2E2E2E]">
                  Type of tour
                </div>
                <div className="max-w-[20rem] max-md:max-w-[14.53125rem] w-[20rem] line-clamp-2 text-ellipsis flex flex-1 items-center h-[2.5rem] py-[0.5rem] px-[1rem] border-b-[0.5px] border-solid border-[#eee] text-[0.75rem] text-[#727272]">
                  Ha Giang Loop tour 2d3n: Best Budget in 2 days 3 nights
                </div>
              </div>
              <div className="w-full flex">
                <div className="h-[2.5rem] flex items-center w-[12.1875rem] max-md:w-[7.4375rem] py-[0.5rem] px-[1rem] border-b-[0.5px] border-r-[0.5px] border-solid border-[#eee] font-extrabold text-[0.875rem] text-[#2E2E2E]">
                  Type of tour
                </div>
                <div className="max-w-[20rem] max-md:max-w-[14.53125rem] w-[20rem] line-clamp-2 text-ellipsis flex flex-1 items-center h-[2.5rem] py-[0.5rem] px-[1rem] border-b-[0.5px] border-solid border-[#eee] text-[0.75rem] text-[#727272]">
                  Ha Giang Loop tour 2d3n: Best Budget in 2 days 3 nights
                </div>
              </div>
              <div className="w-full flex">
                <div className="h-[2.5rem] flex items-center w-[12.1875rem] max-md:w-[7.4375rem] py-[0.5rem] px-[1rem] border-b-[0.5px] border-r-[0.5px] border-solid border-[#eee] font-extrabold text-[0.875rem] text-[#2E2E2E]">
                  Type of tour
                </div>
                <div className="max-w-[20rem] max-md:max-w-[14.53125rem] w-[20rem] line-clamp-2 text-ellipsis flex flex-1 items-center h-[2.5rem] py-[0.5rem] px-[1rem] border-b-[0.5px] border-solid border-[#eee] text-[0.75rem] text-[#727272]">
                  Ha Giang Loop tour 2d3n: Best Budget in 2 days 3 nights
                </div>
              </div>
            </div>
            <div className="w-full py-[0.75rem] px-[1rem] rounded-[0.5rem] bg-[#23704D] mb-[0.5rem]">
              <div className="flex justify-between items-center w-full mb-[0.5rem]">
                <span className="text-[0.875rem] font-bold text-white">
                  Provisional
                </span>
                <span className="text-[1rem] font-bold text-white">$0</span>
              </div>
              <div className="w-full h-[0.0625rem] my-[0.5rem] bg-[#d9d9d9]/50 opacity-40 inline-block "></div>
              <div className="flex justify-between items-center w-full mb-[0.5rem]">
                <span className="text-[0.875rem] font-bold text-white">
                  Provisional
                </span>
                <span className="text-[1rem] font-bold text-white">$0</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-[0.5rem]">
            <button className="flex-1 flex items-center justify-center gap-[0.5rem] px-[2rem] py-[1rem] h-[3.5rem] bg-orange-normal text-white rounded-[0.5rem] border border-solid border-orange-normal cursor-pointer">
              <span className="text-[0.875rem] font-bold leading-[1.2] uppercase">
                BOOK NOW, Pay later
              </span>
            </button>
            <button className="flex-1 flex items-center justify-center gap-[0.5rem] px-[2rem] py-[1rem] h-[3.5rem] bg-white text-orange-normal rounded-[0.5rem] border border-solid border-orange-normal cursor-pointer">
              <span className="text-[0.875rem] font-bold leading-[1.2] uppercase">
                BOOK NOW, Pay later
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
