'use client';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

export default function ProgressBarProvider({ children }) {
  return (
    <>
      {children}
      <ProgressBar
        height="10px"
        color="#da4b19"
        options={{ showSpinner: true }}
        shallowRouting
      />
    </>
  );
}
