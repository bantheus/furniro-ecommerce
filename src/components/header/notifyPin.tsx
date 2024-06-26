interface NotifyPinProps {
  quantity: string;
}

const NotifyPin = ({ quantity }: NotifyPinProps) => {
  return (
    <div className="absolute -right-4 -top-4 flex size-6 items-center justify-center rounded-full bg-primary text-sm text-white">
      {quantity}
    </div>
  );
};

export default NotifyPin;
