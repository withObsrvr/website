/* global React */
import { SiteFooter, SiteNav } from "./components/site-chrome.jsx";

function SharedNav({ active }) {
  return <SiteNav active={active} useHomepageProductLinks />;
}

function SharedFooter() {
  return <SiteFooter />;
}

Object.assign(window, { SharedNav, SharedFooter });
