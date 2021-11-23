import s from './HoverCard.module.css';
import * as HoverCard from '@radix-ui/react-hover-card';

const HoverCardComponent = () => {
  return (
    <div className={s.Container}>
      <h2 className="mb-2 font-mono text-xl font-bold">Hover Card</h2>
      <HoverCard.Root >
        <HoverCard.Trigger asChild>
          <a className={s.Trigger} href="https://twitter.com/radix_ui" target="_blank" rel="noreferrer noopener">
            <img className={s.ImageTrigger} src="https://tailwindcss.com/_next/static/media/sarah-dayan.a8ff3f1095a58085a82e3bb6aab12eb2.jpg" />

          </a>
        </HoverCard.Trigger>
        <HoverCard.Content className={s.Content}>
          <div className="flex flex-col ">
            <div className="flex">
              <div className="w-24 h-24 overflow-hidden rounded-full">
                <img
                  className="object-cover object-center w-full h-full"
                  src="https://tailwindcss.com/_next/static/media/sarah-dayan.a8ff3f1095a58085a82e3bb6aab12eb2.jpg"
                />
              </div>
              <div className="mt-3 ml-5">
                <h3 className="font-mono text-2xl font-bold " >Radix</h3>
                <h4 className="font-mono text-xl" >@radix_ui</h4>
              </div>
            </div>
            <p className="mt-2 text-base">
              Components, icons, colors, and templates for building high-quality, accessible UI. Free
              and open-source.
            </p>
            <div className="grid grid-cols-2 mt-4">
              <div>
                <div >0</div> <div >Following</div>
              </div>
              <div>
                <div >2,900</div> <div >Followers</div>
              </div>
            </div>
          </div>
          <HoverCard.Arrow className={s.Arrow} />
        </HoverCard.Content>
      </HoverCard.Root>
    </div>
  )
}

export default HoverCardComponent