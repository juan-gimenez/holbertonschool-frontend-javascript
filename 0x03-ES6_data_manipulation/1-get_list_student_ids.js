export default function getListStudentIds(getId) {
    if (!Array.isArray(getId)) {
      return [];
    }
    const ids = getId.map((item) => item.id);
    return ids;
}
