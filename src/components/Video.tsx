import { DefaultUi, Player, Youtube } from "@vime/react";
import { Button } from "./Button";
import { Wallpaper } from "./Wallpaper";

import "@vime/core/themes/default.css"
import { useGetLessonBySlugQuery } from "../graphql/generated";

interface VideoProps {
  lessonSlug: string
}

export function Video(props: VideoProps) {
  const { data } = useGetLessonBySlugQuery({
    variables: {
      slug: props.lessonSlug
    }
  })

  if (!data || !data.lesson) {
    return (
      <div className="flex-1">
        <p>Carregando...</p>
      </div>
    )
  }

  return (
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
          <Player>
            <Youtube videoId={data.lesson.videoId} />
            <DefaultUi />
          </Player>
        </div>
      </div>
      <div className="p-8 max-w-[1100px] mx-auto">
        <div className="flex items-start gap-16">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">
              {data.lesson.title}
            </h1>
            <p className="mt-4 text-gray-200 leading-relaxed">
              {data.lesson.description}
            </p>
            {data.lesson.teacher && (
              <div className="flex items-center gap-4 mt-6">
                <img
                  className="h-16 rounded-full border-2 border-blue-500"
                  src={data.lesson.teacher.avatarURL} alt=""
                />
                <div className="leading-relaxed">
                  <strong
                    className="font-bold text-2xl block">
                    {data.lesson.teacher.name}
                  </strong>
                  <span className="text-gray-200 text-sm block">
                    {data.lesson.teacher.bio}
                  </span>
                </div>
              </div>
            )}
          </div>
          <div className="flex flex-col gap-4">
            <Button text="Comunidade do Discord" variant="primary" />
            <Button text=" Acesse o desafio" variant="secondary" />
          </div>
        </div>
        <div className="gap-8 mt-20 grid grid-cols-2">
          <Wallpaper title="Material complementar" text="Acesse o material complementar para acelerar o seu desenvolvimento" />
          <Wallpaper title="Wallpapers exclusivos" text="Baixe wallpapers exclusivos do Ignite Lab e personalize a sua m??quina" />
        </div>
      </div>
    </div>
  )
}