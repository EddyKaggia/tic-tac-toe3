import "./Modal.css";

type Props = {
  message: string;
  onClick(): void;
};

export default function Modal({ message, onClick }: Props) {
  return (
    <>
      {/* <!-- Modal that opens when game ends --> */}
      <div className="modal">
        <div className="modal-contents">
          <p>{message}</p>
          <button onClick={onClick}>Play again</button>
        </div>
      </div>
    </>
  );
}
