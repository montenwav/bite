import { useContext } from "react";
import {
  addedItemsCtx,
  setIsBagOpenCtx,
  isAdaptiveCtx,
} from "../../Contexts.jsx";
import { Hamburger } from "./Hamburger.jsx";

export const HeaderMain = () => {
  return (
    <div className="headerMain">
      <LeftHeader />
      <HeaderLinks />
      <RightHeader />
    </div>
  );
};

const LeftHeader = () => {
  const isAdaptive = useContext(isAdaptiveCtx);

  return (
    <div className="leftHeader">
      <Hamburger />
      <div className="logo_visible">
        <div
          style={{ transform: isAdaptive ? "translateY(-35px)" : "" }}
          className="logo_container"
        >
          <a href="/">
            <svg
              className="logo"
              xmlns="http://www.w3.org/2000/svg"
              width={73}
              height={33}
              fill="none"
              viewBox="-1 -1 73 33"
              id="bite-logo-black"
              y={1114}
            >
              <path
                d="M26.977 21.482a7.342 7.342 0 0 0-.532-2.2 6.403 6.403 0 0 0-1.116-1.75 8.38 8.38 0 0 0-2.491-1.851 14.552 14.552 0 0 0-1.597-.673 7.08 7.08 0 0 0-.57-.189c-.649-.18-1.3-.353-1.964-.473-.037 0-.093 0-.091-.08.193-.036.378-.117.57-.169.484-.137.96-.302 1.426-.493a13.16 13.16 0 0 0 1.272-.584c.462-.238.904-.512 1.324-.82a6.855 6.855 0 0 0 1.275-1.212c.316-.389.577-.82.773-1.28.202-.479.337-.982.4-1.497a6.659 6.659 0 0 0-.284-2.916 5.265 5.265 0 0 0-.787-1.514 6.508 6.508 0 0 0-.903-.985 7.157 7.157 0 0 0-1.226-.88 9.457 9.457 0 0 0-1.596-.673 5.361 5.361 0 0 0-.598-.168 18.861 18.861 0 0 0-2.16-.412c-.367-.039-.732-.115-1.1-.143C15.848.429 14.696.333 13.54.338c-1.157.005-2.341-.017-3.512.017-1.11.032-2.22.08-3.33.116-1.11.035-2.237.057-3.364.09C2.342.587 1.35.62.358.653A1.145 1.145 0 0 0 0 .688v2.37c.032.01.066.017.1.021.547.007 1.094.059 1.634.153.39.057.763.199 1.092.416.393.27.582.685.718 1.132.152.552.22 1.124.205 1.696v17.668a6.87 6.87 0 0 1-.1 1.259 3.3 3.3 0 0 1-.337 1.02c-.235.403-.617.7-1.065.828a5.776 5.776 0 0 1-1.594.26c-.207.014-.414.019-.646.029v2.4a.619.619 0 0 0 .297.03h15.054c.252 0 .505 0 .755-.012 1.534-.03 3.061-.207 4.562-.525.636-.14 1.26-.332 1.867-.574a7.77 7.77 0 0 0 1.564-.841 6.999 6.999 0 0 0 1.463-1.365 6.331 6.331 0 0 0 1.29-2.86c.146-.761.186-1.539.118-2.31ZM11.392 2.956c.052-.059.116-.043.168-.043 1.038.021 2.07.06 3.09.304.766.18 1.44.634 1.895 1.276.291.391.51.832.646 1.3.101.323.175.653.22.988.107.868.107 1.745 0 2.613a5.1 5.1 0 0 1-.556 1.851c-.279.507-.7.92-1.211 1.19a4.941 4.941 0 0 1-2.131.572c-.636.032-1.273.03-1.91.032a.355.355 0 0 1-.211-.03V2.955Zm7.084 20.697a5.816 5.816 0 0 1-.69 2.01 3.312 3.312 0 0 1-1.513 1.382c-.422.185-.875.29-1.335.311a4.708 4.708 0 0 1-2.037-.255c-.62-.246-1.107-.653-1.33-1.306a4.315 4.315 0 0 1-.2-1.4v-8.476a.322.322 0 0 1 .026-.195.204.204 0 0 1 .131-.025c.851.008 1.704-.032 2.555.05a8.274 8.274 0 0 1 1.835.322c.51.165.973.454 1.346.841.464.493.809 1.085 1.009 1.732.182.597.295 1.214.336 1.837a12.377 12.377 0 0 1-.133 3.17v.002Z"
                fill="#131313"
              />
              <path
                d="M39.12 27.646a5.808 5.808 0 0 1-1.45-.168 1.435 1.435 0 0 1-1.08-1.079 5.822 5.822 0 0 1-.18-1.61V12.201h-.024l-10.17 1.023v2.213h.684a4.435 4.435 0 0 1 1.593.262c.225.083.418.235.553.433.114.185.204.385.266.594a5.2 5.2 0 0 1 .168 1.514v6.596c.019.52-.038 1.04-.168 1.543-.153.515-.438.907-.957 1.067-.36.118-.735.18-1.114.187-.267 0-.535 0-.8.008-.064 0-.135-.02-.189.036-.054.328-.033 2.138.027 2.291.042 0 .086.01.13.01H39.19a.3.3 0 0 0 .066-.013.056.056 0 0 0 .019-.012l.025-.028v-2.237c-.059-.064-.121-.042-.18-.042ZM32.75 8.24a3.952 3.952 0 0 0 3.958-3.949 3.955 3.955 0 0 0-3.946-3.96c-2.067 0-3.89 1.816-3.852 3.926-.044 2.07 1.633 3.988 3.84 3.983ZM51.668 28.892c.6-.412 1.158-.883 1.663-1.407.406.421.847.806 1.319 1.151a9.938 9.938 0 0 0 1.941 1.126c.61.268 1.245.476 1.896.622.875.197 1.768.301 2.666.31a12.117 12.117 0 0 0 1.924-.168 10.543 10.543 0 0 0 4.274-1.664 8.683 8.683 0 0 0 2.26-2.134.28.28 0 0 0 .069-.193l-1.943-1.188c-.054.043-.104.09-.151.141a7.42 7.42 0 0 1-.76.816c-.458.447-.981.822-1.551 1.112a5.02 5.02 0 0 1-1.473.476 5.08 5.08 0 0 1-2.07-.116 3.622 3.622 0 0 1-1.128-.518 3.924 3.924 0 0 1-1.224-1.346 7.07 7.07 0 0 1-.767-2.137c-.151-.83-.24-1.67-.264-2.512a.61.61 0 0 1 .043-.389h10.56c.444 0 .868.019 1.303-.015.024-.17.024-.343 0-.513a11.25 11.25 0 0 0-.612-3.534 7.445 7.445 0 0 0-.92-1.794 7.673 7.673 0 0 0-2.412-2.187 9.319 9.319 0 0 0-2.22-.949 11.914 11.914 0 0 0-2.65-.404c-.66-.025-1.32-.003-1.977.068-.715.075-1.419.224-2.103.444a7.805 7.805 0 0 0-.708.266 8.406 8.406 0 0 0-1.557.8 9.696 9.696 0 0 0-2.039 1.719 7.804 7.804 0 0 0-1.159 1.696 8.628 8.628 0 0 0-.763 2.264c-.091.473-.153.95-.184 1.43-.103 1.31.03 2.626.39 3.888.05.158.105.313.157.47.078.228.169.453.27.672l-.66.752c-.111.115-.224.226-.337.337 0 0-1.009 1.178-2.235 1.267a2.596 2.596 0 0 1-.484 0l-.1-.025c-.57-.18-.819-.798-.926-1.25l-.032-.169-.022-.14a11.078 11.078 0 0 1-.083-1.585v-9.961h4.321v-2.248h-4.32V6.275h-2.298c-.062.26-.13.505-.18.756a6.176 6.176 0 0 1-.789 1.948 6.729 6.729 0 0 1-1.707 1.9 6.066 6.066 0 0 1-2.092 1.05 8.053 8.053 0 0 1-1.894.25v2.23h2.018v7.42c0 1.159-.01 2.318.01 3.477.007.557.078 1.112.214 1.653.156.658.445 1.278.85 1.82a4.397 4.397 0 0 0 1.764 1.356c.478.201.98.343 1.493.421.585.1 1.178.144 1.771.13.585-.014 1.168-.07 1.744-.169a7.3 7.3 0 0 0 1.886-.575s1.41-.634 1.988-1.05Zm6.66-10.45a9.942 9.942 0 0 1 .281-2.369 3.59 3.59 0 0 1 .717-1.479c.32-.377.77-.623 1.26-.69a2.29 2.29 0 0 1 1.41.2c.372.188.683.48.896.84a5.64 5.64 0 0 1 .728 2.437c.032.337.06.673.087 1.01a.443.443 0 0 1-.026.244h-5.305c-.066-.056-.047-.127-.047-.192Z"
                fill="#131313"
              />
            </svg>
          </a>
          <svg
            className="adaptive_logo"
            xmlns="http://www.w3.org/2000/svg"
            width={184}
            height={13}
            fill="none"
            viewBox="-1 -1 184 13"
            id="because-its-the-earth-logo-black"
            y={1018}
          >
            <path
              d="M.42.69 2.254.648C3.864.592 3.864.592 4.326.592c1.456 0 2.338.154 3.01.546.602.35.98.994.98 1.694 0 1.106-.756 1.792-2.436 2.184.77.112 1.246.252 1.666.49.798.476 1.218 1.162 1.218 2.002 0 .966-.532 1.75-1.442 2.142-.56.252-1.302.35-2.45.35H.392v-.616h.182c.882.014 1.162-.35 1.148-1.47V2.748C1.708 1.586 1.47 1.292.546 1.306H.42V.69Zm3.374 4.676v2.31c0 1.358.182 1.666.98 1.666.686 0 1.232-.266 1.484-.714.154-.266.224-.588.224-1.078 0-.798-.126-1.288-.448-1.652-.364-.42-.784-.532-1.974-.532h-.266Zm0-.658h.266c.728 0 1.05-.056 1.358-.238.448-.252.658-.728.658-1.498 0-1.288-.504-1.736-1.96-1.736-.126 0-.21 0-.322.014v3.458ZM17.332 6.99h.616L17.836 10h-8.26v-.616h.182c.868.028 1.162-.35 1.148-1.47V2.706c0-1.092-.28-1.47-1.106-1.442h-.154V.662h7.518l.154 2.394h-.616c-.392-1.414-.854-1.792-2.142-1.75h-1.582v3.458h.91c.938-.014 1.134-.21 1.162-1.134v-.098h.63V6.71h-.63v-.112c-.014-.952-.224-1.162-1.134-1.176h-.938v2.282c-.042 1.316.266 1.68 1.386 1.638h.392c1.428.028 2.1-.602 2.576-2.352Zm9.72-.546h.602V9.86h-.602c-.098-.42-.21-.672-.42-.924-.756.798-1.862 1.246-3.122 1.246-2.702 0-4.676-2.002-4.676-4.746 0-2.842 2.002-4.942 4.718-4.942 1.218 0 2.24.406 3.01 1.204.14-.294.238-.574.322-.952h.602l.084 3.486h-.602c-.182-.84-.434-1.442-.826-1.96-.476-.644-1.358-1.064-2.24-1.064-1.806 0-2.716 1.414-2.716 4.186 0 1.26.168 2.142.532 2.772.448.784 1.316 1.274 2.254 1.274.672 0 1.372-.252 1.932-.714.504-.42.966-1.344 1.148-2.282ZM38.027 10h-4.312v-.616h.098c.616 0 .91-.126.91-.42 0-.098-.098-.378-.252-.756l-.42-1.036h-3.094l-.182.448c-.28.672-.336.882-.336 1.106 0 .392.364.658.882.658h.112V10H28.45v-.616h.098c.616-.098 1.05-.602 1.498-1.764l2.87-7.112h.616l2.996 7.294c.546 1.288.742 1.498 1.428 1.582h.07V10Zm-4.228-3.458L32.483 3.35l-1.288 3.192h2.604ZM44.358.662h3.346v.616h-.098c-.84.098-1.19.546-1.162 1.456v3.29c0 1.162-.07 1.638-.308 2.17-.574 1.288-1.848 1.988-3.626 1.988-1.512 0-2.8-.616-3.402-1.624-.308-.532-.434-1.064-.448-1.848V2.706c-.014-1.162-.238-1.442-1.162-1.428h-.14V.662h4.704v.616h-.168c-.924-.014-1.148.266-1.162 1.428V6.15c0 1.204.084 1.736.35 2.198.364.644 1.134 1.036 2.016 1.036 1.19 0 2.198-.686 2.534-1.722.098-.294.098-.294.112-1.666v-3.15c.014-1.064-.378-1.54-1.302-1.568h-.084V.662Zm4.124 9.198V6.738h.658c.168.714.35 1.176.588 1.554.504.77 1.204 1.19 2.016 1.19.896 0 1.568-.588 1.568-1.386 0-.686-.504-1.204-1.722-1.764-1.428-.672-1.974-.994-2.408-1.456-.434-.448-.686-1.092-.686-1.764 0-1.484 1.19-2.618 2.744-2.618.784 0 1.456.28 2.058.868.168-.238.196-.308.266-.7h.63v2.646h-.602c-.35-1.344-1.19-2.156-2.226-2.156-.784 0-1.33.49-1.33 1.19 0 .714.476 1.162 1.876 1.778 1.246.532 1.904.91 2.31 1.33.49.504.77 1.19.77 1.918 0 1.61-1.302 2.814-3.038 2.814-.994 0-1.918-.406-2.534-1.12-.126.21-.21.462-.28.798h-.658Zm15.045-2.87h.616L64.03 10h-8.26v-.616h.182c.868.028 1.162-.35 1.148-1.47V2.706c0-1.092-.28-1.47-1.106-1.442h-.154V.662h7.518l.154 2.394h-.616c-.392-1.414-.854-1.792-2.142-1.75h-1.582v3.458h.91c.938-.014 1.134-.21 1.162-1.134v-.098h.63V6.71h-.63v-.112c-.014-.952-.224-1.162-1.134-1.176h-.938v2.282c-.042 1.316.266 1.68 1.386 1.638h.392c1.428.028 2.1-.602 2.576-2.352Zm4.651-5.712V.662h4.704v.616h-.168c-.91-.014-1.134.266-1.148 1.428v5.208c0 1.134.252 1.47 1.134 1.47h.182V10h-4.704v-.616h.168c.882 0 1.148-.336 1.148-1.47V2.706c-.014-1.162-.238-1.442-1.176-1.428h-.14Zm6.064 1.904h-.616l.014-2.52h9.24l.014 2.52h-.616c-.35-1.554-.686-1.862-1.96-1.862h-1.036v6.594c0 1.134.266 1.484 1.148 1.47h.308V10h-4.984v-.616h.308c.882.014 1.148-.336 1.148-1.47V1.32h-.994c-1.4 0-1.694.294-1.974 1.862Zm9.647 1.848v-.672c.953-.112 1.61-.7 1.61-1.442 0-.21-.111-.378-.251-.378a.859.859 0 0 0-.225.042 1.046 1.046 0 0 1-.28.042c-.531 0-.951-.434-.951-.994 0-.63.462-1.078 1.091-1.078.868 0 1.428.742 1.428 1.876 0 1.456-.966 2.492-2.422 2.604Zm3.744 4.83V6.738h.658c.168.714.35 1.176.588 1.554.504.77 1.204 1.19 2.016 1.19.896 0 1.568-.588 1.568-1.386 0-.686-.504-1.204-1.722-1.764-1.428-.672-1.974-.994-2.408-1.456-.434-.448-.686-1.092-.686-1.764 0-1.484 1.19-2.618 2.744-2.618.784 0 1.456.28 2.058.868.168-.238.196-.308.266-.7h.63v2.646h-.602c-.35-1.344-1.19-2.156-2.226-2.156-.784 0-1.33.49-1.33 1.19 0 .714.476 1.162 1.876 1.778 1.246.532 1.904.91 2.31 1.33.49.504.77 1.19.77 1.918 0 1.61-1.302 2.814-3.038 2.814-.994 0-1.918-.406-2.534-1.12-.126.21-.21.462-.28.798h-.658Zm11.082-6.678h-.616l.014-2.52h9.24l.014 2.52h-.616c-.35-1.554-.686-1.862-1.96-1.862h-1.036v6.594c0 1.134.266 1.484 1.148 1.47h.308V10h-4.984v-.616h.308c.882.014 1.148-.336 1.148-1.47V1.32h-.994c-1.4 0-1.694.294-1.974 1.862Zm16.952 1.54V2.706c-.014-1.148-.252-1.442-1.162-1.428h-.112V.662h4.634v.616h-.126c-.91-.028-1.148.28-1.162 1.428v5.208c-.014 1.106.28 1.498 1.134 1.47h.154V10h-4.634v-.616h.126c.854.028 1.162-.364 1.148-1.47V5.45h-4.186v2.464c-.014 1.106.294 1.498 1.148 1.47h.126V10h-4.634v-.616h.154c.854.028 1.148-.364 1.134-1.47V2.706c-.014-1.148-.252-1.456-1.162-1.428h-.126V.662h4.634v.616h-.112c-.91-.014-1.148.28-1.162 1.428v2.016h4.186Zm11.76 2.268h.616l-.112 3.01h-8.26v-.616h.182c.868.028 1.162-.35 1.148-1.47V2.706c0-1.092-.28-1.47-1.106-1.442h-.154V.662h7.518l.154 2.394h-.616c-.392-1.414-.854-1.792-2.142-1.75h-1.582v3.458h.91c.938-.014 1.134-.21 1.162-1.134v-.098h.63V6.71h-.63v-.112c-.014-.952-.224-1.162-1.134-1.176h-.938v2.282c-.042 1.316.266 1.68 1.386 1.638h.392c1.428.028 2.1-.602 2.576-2.352Zm12.407 0h.616l-.112 3.01h-8.26v-.616h.182c.868.028 1.162-.35 1.148-1.47V2.706c0-1.092-.28-1.47-1.106-1.442h-.154V.662h7.518l.154 2.394h-.616c-.392-1.414-.854-1.792-2.142-1.75h-1.582v3.458h.91c.938-.014 1.134-.21 1.162-1.134v-.098h.63V6.71h-.63v-.112c-.014-.952-.224-1.162-1.134-1.176h-.938v2.282c-.042 1.316.266 1.68 1.386 1.638h.392c1.428.028 2.1-.602 2.576-2.352ZM150.565 10h-4.312v-.616h.098c.616 0 .91-.126.91-.42 0-.098-.098-.378-.252-.756l-.42-1.036h-3.094l-.182.448c-.28.672-.336.882-.336 1.106 0 .392.364.658.882.658h.112V10h-2.982v-.616h.098c.616-.098 1.05-.602 1.498-1.764l2.87-7.112h.616l2.996 7.294c.546 1.288.742 1.498 1.428 1.582h.07V10Zm-4.228-3.458-1.316-3.192-1.288 3.192h2.604ZM160.817 10h-2.772c-.406-.378-.924-1.106-1.568-2.212-1.19-2.002-1.274-2.086-2.324-2.03h-.084v2.156c0 1.134.252 1.47 1.134 1.47h.266V10h-4.844v-.616h.224c.896 0 1.148-.336 1.148-1.47V2.706c-.014-1.162-.238-1.442-1.162-1.428h-.182V.662l2.002-.028c.042 0 .224-.014.49-.028.224-.014.476-.014.756-.014 1.778 0 3.094.154 3.696.448.882.406 1.372 1.148 1.372 2.044 0 1.162-.7 1.904-2.156 2.31.49.308.77.644 1.75 2.1.994 1.442 1.456 1.848 2.17 1.89h.084V10Zm-6.748-4.914h.294c.882 0 1.344-.07 1.68-.28.476-.266.728-.84.728-1.652 0-.448-.084-.812-.252-1.092-.322-.574-.84-.77-1.988-.77-.154 0-.28 0-.462.014v3.78Zm6.775-1.904h-.616l.014-2.52h9.24l.014 2.52h-.616c-.35-1.554-.686-1.862-1.96-1.862h-1.036v6.594c0 1.134.266 1.484 1.148 1.47h.308V10h-4.984v-.616h.308c.882.014 1.148-.336 1.148-1.47V1.32h-.994c-1.4 0-1.694.294-1.974 1.862Zm16.953 1.54V2.706c-.014-1.148-.252-1.442-1.162-1.428h-.112V.662h4.634v.616h-.126c-.91-.028-1.148.28-1.162 1.428v5.208c-.014 1.106.28 1.498 1.134 1.47h.154V10h-4.634v-.616h.126c.854.028 1.162-.364 1.148-1.47V5.45h-4.186v2.464c-.014 1.106.294 1.498 1.148 1.47h.126V10h-4.634v-.616h.154c.854.028 1.148-.364 1.134-1.47V2.706c-.014-1.148-.252-1.456-1.162-1.428h-.126V.662h4.634v.616h-.112c-.91-.014-1.148.28-1.162 1.428v2.016h4.186Z"
              fill="#131313"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

const HeaderLinks = () => {
  return (
    <div className="headerLinks">
      <HeaderLink>SHOP</HeaderLink>
      <HeaderLink>ABOUT</HeaderLink>
      <HeaderLink>OUR IMPACT</HeaderLink>
    </div>
  );
};

const HeaderLink = ({ children }) => {
  return (
    <div className="HeaderLink">
      <a href="/">{children}</a>
      <div className="headerLinkHoverLine"></div>
    </div>
  );
};

const RightHeader = () => {
  const setIsBagOpen = useContext(setIsBagOpenCtx);
  const addedItems = useContext(addedItemsCtx);

  const handleOpenBtn = () => {
    setIsBagOpen(true);
    document.body.style.overflow = "hidden";
  };

  return (
    <div className="bag_icon_container">
      <div className="bag_icons">
        <a href="/login">
          <svg
            className="login_icon"
            xmlns="http://www.w3.org/2000/svg"
            width={40}
            height={40}
            fill="none"
            viewBox="-1 -1 32 32"
            id="person-black"
            y={4345}
          >
            <mask
              id="dha"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x={0}
              y={0}
              width={30}
              height={30}
            >
              <path fill="#131313" d="M0 0h30v30H0z" />
            </mask>
            <g mask="url(#dha)">
              <path
                d="M15 14.231c-1.031 0-1.914-.367-2.648-1.102-.735-.734-1.102-1.617-1.102-2.648 0-1.031.367-1.914 1.102-2.648.734-.735 1.617-1.102 2.648-1.102 1.031 0 1.914.367 2.648 1.102.735.734 1.102 1.617 1.102 2.648 0 1.031-.367 1.914-1.102 2.648-.734.735-1.617 1.102-2.648 1.102ZM6.25 23.27v-2.058c0-.516.15-1 .45-1.449.301-.45.705-.798 1.213-1.046 1.18-.566 2.36-.99 3.541-1.273A15.18 15.18 0 0 1 15 17.019c1.183 0 2.365.142 3.546.425 1.18.283 2.361.707 3.54 1.273.509.248.913.597 1.213 1.046.3.45.451.933.451 1.449v2.058H6.25Zm1.25-1.25h15v-.808c0-.277-.09-.538-.268-.782a2.157 2.157 0 0 0-.742-.617 15.863 15.863 0 0 0-3.182-1.146 13.973 13.973 0 0 0-6.616 0 15.864 15.864 0 0 0-3.182 1.146 2.157 2.157 0 0 0-.742.617 1.297 1.297 0 0 0-.268.782v.807ZM15 12.98c.688 0 1.276-.245 1.766-.734.49-.49.734-1.079.734-1.766 0-.688-.245-1.276-.734-1.766A2.407 2.407 0 0 0 15 7.981c-.688 0-1.276.245-1.766.734a2.407 2.407 0 0 0-.734 1.766c0 .688.245 1.276.734 1.766.49.49 1.079.734 1.766.734Z"
                fill="#131313"
              />
            </g>
          </svg>
        </a>

        <svg
          onClick={handleOpenBtn}
          className="bag_icon"
          xmlns="http://www.w3.org/2000/svg"
          width={40}
          height={40}
          fill="none"
          viewBox="-1 -1 32 32"
          id="bag-black"
          y={923}
        >
          <mask
            id="aua"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x={0}
            y={0}
            width={30}
            height={30}
          >
            <path fill="#131313" d="M0 0h30v30H0z" />
          </mask>
          <g mask="url(#aua)">
            <path
              d="M8.27 26.25c-.576 0-1.056-.193-1.442-.578-.385-.386-.578-.866-.578-1.441V10.769c0-.575.193-1.055.578-1.44.386-.386.866-.579 1.441-.579h2.356v-.625c0-1.215.425-2.248 1.276-3.099.851-.85 1.884-1.276 3.099-1.276 1.215 0 2.248.425 3.099 1.276.85.851 1.276 1.884 1.276 3.099v.625h2.356c.575 0 1.055.193 1.44.578.386.386.579.866.579 1.441v13.462c0 .575-.193 1.055-.578 1.44-.386.386-.866.579-1.441.579H8.269Zm0-1.25h13.46c.193 0 .37-.08.53-.24.16-.16.24-.337.24-.53V10.77c0-.193-.08-.37-.24-.53-.16-.16-.337-.24-.53-.24h-2.355v3.125c0 .178-.06.326-.18.446a.605.605 0 0 1-.445.179.605.605 0 0 1-.446-.18.605.605 0 0 1-.179-.445V10h-6.25v3.125c0 .178-.06.326-.18.446a.605.605 0 0 1-.445.179.605.605 0 0 1-.446-.18.605.605 0 0 1-.179-.445V10H8.269c-.192 0-.368.08-.529.24-.16.16-.24.337-.24.53v13.46c0 .193.08.37.24.53.16.16.337.24.53.24Zm3.605-16.25h6.25v-.625c0-.88-.3-1.62-.903-2.222C16.621 5.3 15.88 5 15 5c-.88 0-1.62.3-2.222.903-.602.601-.903 1.342-.903 2.222v.625Z"
              fill="#131313"
            />
          </g>
        </svg>
      </div>
      {addedItems.length !== 0 && (
        <div className="how_many_items">
          <h6 style={{ fontSize: ".7em" }}>{addedItems.length}</h6>
        </div>
      )}
    </div>
  );
};
