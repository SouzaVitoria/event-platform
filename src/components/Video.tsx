import { DefaultUi, Player, Youtube } from "@vime/react";
import { Button } from "./Button";
import { Wallpaper } from "./Wallpaper";

import "@vime/core/themes/default.css"

export function Video() {
  return (
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
          <Player>
            <Youtube videoId="SO4-izct7Mc" />
            <DefaultUi />
          </Player>
        </div>
      </div>
      <div className="p-8 max-w-[1100px] mx-auto">
        <div className="flex items-start gap-16">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">
              Aula 01 - Abertura do Ignite Lab
            </h1>
            <p className="mt-4 text-gray-200 leading-relaxed">
              Nessa aula vamos dar início ao projeto criando a estrutura base da aplicação utilizando ReactJS, Vite e TailwindCSS. Vamos também realizar o setup do nosso projeto no GraphCMS criando as entidades da aplicação e integrando a API GraphQL gerada pela plataforma no nosso front-end utilizando Apollo Client.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <img
                className="h-16 rounded-full border-2 border-blue-500"
                src="https://github.com/SouzaVitoria.png" alt=""
              />
              <div className="leading-relaxed">
                <strong
                  className="font-bold text-2xl block">
                  Vitória Souza
                </strong>
                <span className="text-gray-200 text-sm block">
                  Desenvolvedora Front-end
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <Button text="Comunidade do Discord" variant="primary" />
            <Button text=" Acesse o desafio" variant="secondary" />
          </div>
        </div>
        <div className="gap-8 mt-20 grid grid-cols-2">
          <Wallpaper title="Material complementar" text="Acesse o material complementar para acelerar o seu desenvolvimento" />
          <Wallpaper title="Wallpapers exclusivos" text="Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina" />
        </div>
      </div>
    </div>
  )
}