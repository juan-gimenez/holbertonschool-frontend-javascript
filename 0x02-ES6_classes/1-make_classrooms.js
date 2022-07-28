import ClassRoom from './0-classroom';
/*  array of 3 ClassRoom objects */
export default function initializeRooms() {
    const List = [];
    const c1 = new ClassRoom(19);
    const c2 = new ClassRoom(20);
    const c3 = new ClassRoom(34);
    List.push(c1, c2, c3);
    return List;
}
