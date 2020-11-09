import React, {
  useEffect,
  useRef,
} from 'react';

type CanvasProps = {
  width: string;
  height: string;
  textToShow: string;
  imageToShow?: string;
};

export const Canvas = (props: CanvasProps): JSX.Element => {
  const {
    width,
    height,
    imageToShow,
    textToShow,
  } = props;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const canvasObj: HTMLCanvasElement | null = canvasRef.current;
    const ctx: CanvasRenderingContext2D | null = canvasObj ? canvasObj.getContext('2d') : null;
    const img = imageRef.current as HTMLImageElement;
    if (ctx && img) {
      ctx.drawImage(img, 50, 50);
      ctx.font = '40px Courier';
      ctx.fillStyle = 'black';
      ctx.fillText(textToShow, 20, 180);
    }
  }, [imageToShow, textToShow]);

  return (
    <>
      <img ref={imageRef} src={imageToShow} alt="" />
      <canvas ref={canvasRef} width={width} height={height} />
    </>
  );
};
