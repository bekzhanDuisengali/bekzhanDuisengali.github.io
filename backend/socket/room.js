const rooms = {};

function setupSocket(io) {
    io.on("connection", (socket) => {
        console.log("User connected:", socket.id);

        // socket.on("join_room", ({ roomId, userId, username }) => {
        //     socket.join(roomId);
        //
        //     if (!rooms[roomId]) {
        //         rooms[roomId] = {
        //             members: [],
        //             gameStarted: false,
        //         };
        //     }
        //
        //     if (!rooms[roomId].members.find((m) => m.userId === userId)) {
        //         rooms[roomId].members.push({
        //             userId,
        //             username,
        //             isReady: false,
        //         });
        //     }
        //
        //     io.to(roomId).emit("room_members_update", {
        //         members: rooms[roomId].members,
        //     });
        // });

        socket.on("toggle_ready_status", ({ roomId, userId }) => {
            const room = rooms[roomId];
            if (!room) return;

            const member = room.members.find((m) => m.userId === userId);
            if (member) {
                member.isReady = !member.isReady;

                io.to(roomId).emit("room_members_update", {
                    members: room.members,
                });

                const allReady =
                    room.members.length > 1 &&
                    room.members.every((m) => m.isReady === true);

                if (allReady && !room.gameStarted) {
                    room.gameStarted = true;

                    io.to(roomId).emit("game_start", {
                        message: "Все игроки готовы. Игра начинается!",
                    });
                }
            }
        });

        socket.on("disconnect", () => {
            // Обработка выхода при необходимости
        });

        // Предположим, сессия начинается где-то в этой логике:
        socket.on("startSession", ({ roomId }) => {
            console.log(`Session started in room ${roomId}`);

            // Пример: заканчиваем сессию через 10 минут
            setTimeout(() => {
                io.to(roomId).emit("sessionEnded");
                console.log(`Session ended in room ${roomId}`);
            }, 10 * 60 * 200); // 10 минут
        });
    });
}

module.exports = { setupSocket, rooms };
