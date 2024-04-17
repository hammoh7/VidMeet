import { MousePointerClickIcon, Video } from "lucide-react";
import {
  Dialog,
  DialogContent,
} from "../ui/dialog";
import { Button } from "../ui/button";

interface MeetingProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  className?: string;
  children?: React.ReactNode;
  handleClick?: () => void;
  buttonText?: string;
  image?: string;
}

const Meeting = ({
  isOpen,
  onClose,
  title,
  className,
  children,
  handleClick,
  buttonText,
  image,
}: MeetingProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="flex w-full max-w-[450px] flex-col gap-5 border-none px-5 py-7">
        {image && (
          <div className="flex justify-center">
            <Video width={65} height={65} />
          </div>
        )}
        <h1 className="text-xl font-semibold">{title}</h1>
        {children}
        <Button
          className="bg-blue-500 hover:bg-blue-800 focus-visible:ring-0 focus-visible:ring-offset-0"
          onClick={handleClick}
        >
          {image && <MousePointerClickIcon height={10} width={10} />}
          {buttonText || "Schedule Meeting"}
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default Meeting;
