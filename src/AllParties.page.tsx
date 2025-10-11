import React from "react";
import { useUnit } from "effector-react";
import { $allParties } from "./model/app";
import { getUrl } from "./utils.ts";
import { Link } from "wouter";

export function AllPartiesPage() {
  const allParties = useUnit($allParties);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Все комнаты</h1>
            <Link
              href={getUrl("")}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 font-medium"
            >
              ← На главную
            </Link>
          </div>

          {allParties.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🎮</div>
              <h2 className="text-xl font-semibold text-gray-600 mb-2">Комнат пока нет</h2>
              <p className="text-gray-500 mb-6">Создайте первую комнату и начните играть!</p>
              <Link
                href={getUrl("")}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg transition-colors duration-200 font-medium inline-block"
              >
                Создать комнату
              </Link>
            </div>
          ) : (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {allParties.map((party) => {
                const cnt = party.players2?.length || 0;

                return (
                  <div key={party.id} className="bg-gradient-to-r from-gray-50 to-gray-100 hover:from-indigo-50 hover:to-blue-50 rounded-lg p-6 transition-all duration-200 hover:shadow-md border border-gray-200">
                    <Link href={getUrl("room/" + party.id)} className="block h-full">
                      <div className="flex flex-col h-full">
                        <h3 className="font-bold text-lg text-gray-800 mb-3 line-clamp-2">
                          {party.name}
                        </h3>

                        <div className="mt-auto flex items-center justify-between">
                          <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full font-medium">
                            {cnt} {cnt === 1 ? 'игрок' : 'игроков'}
                          </span>
                          <div className="text-indigo-600 hover:text-indigo-700 font-medium">
                            Войти →
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}