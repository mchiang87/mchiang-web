import React, {
  useState,
  useEffect,
  useRef,
  MutableRefObject,
} from 'react';
import { Typography } from '@material-ui/core';

import { InfoSectionComponent } from 'common/components/InfoSection';
import { MiniMeComponent } from 'common/components/MiniMe';

import { HomeJSS } from './Home.jss';

export const HomeComponent = (): JSX.Element => {
  const classes = HomeJSS();
  const [open, setOpen] = useState(true);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const miniMeRef = useRef() as MutableRefObject<SVGSVGElement>;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (wrapperRef.current
        && !wrapperRef.current.contains(event.target as Node)
        && !miniMeRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside, false);
    return () => {
      document.removeEventListener('click', handleClickOutside, false);
    };
  }, [miniMeRef]);

  const handleClickOpen = (): void => {
    setOpen(true);
  };

  return (
    <>
      <h1>
        <div className={classes.header}>
          <div className="infoBox">
            <InfoSectionComponent content="Hi" classNameRef="asdf" ref={wrapperRef} show={open}>
              <Typography>
                `Hi
                Little about me blurb asdf`
              </Typography>
            </InfoSectionComponent>
            {/* <Canvas width="500" height="500" textToShow="Hi" /> */}
          </div>
          <MiniMeComponent onClick={handleClickOpen} ref={miniMeRef} />
        </div>
      </h1>
      <div>Add stuff about me here</div>
      <div>More stuff about me here</div>
    </>
  );
};
