import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import React, { Fragment } from "react";

const Modal = ({
  open,
  onClose,
  children,
  panelClassName,
  backdropClassName,
  initialFocus,
  id,
}) => {
  return (
    <Transition show={open || false} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-50 overflow-y-auto"
        initialFocus={initialFocus}
        open={open}
        onClose={onClose ? onClose : () => {}}
        {...(id ? { id: id } : {})}
      >
        <TransitionChild
          as="div"
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className={
              backdropClassName
                ? `${backdropClassName} transition-blur`
                : `transition-blur fixed inset-0 bg-black bg-opacity-60 backdrop-blur-[9px] transition-opacity`
            }
          />
        </TransitionChild>

        <span
          className="hidden sm:inline-block sm:h-screen sm:align-middle"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-[100vh] items-center justify-center p-4 text-center">
            <TransitionChild
              as="div"
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              className="h-[calc(100vh-170px)] w-full flex justify-center items-center"
            >
              <DialogPanel
                className={
                  panelClassName
                    ? `${panelClassName}`
                    : `relative transform overflow-hidden overflow-y-auto bg-[rgba(60,64,67,.9)] my-8 rounded-lg pt-2 pb-6 h-full text-center shadow-xl transition-all w-[400px] max-md:w-full`
                }
              >
                {children}
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
