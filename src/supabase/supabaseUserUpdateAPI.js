import supabase from "./supabaseClientAPI";

export default async function userUpdateAPI({
  userId,
  avatarSrc,
  email,
  fullName,
  avatarFile,
}) {
  const newData = {
    email,
    data: {
      fullName,
    },
  };

  try {
    if (avatarFile.length) {
      const fileName = `${userId}_avatar`;
      // remove old
      await supabase.storage.from("bucket").remove([fileName]);
      // upload new
      const { error: uploadError } = await supabase.storage
        .from("user-avatar")
        .upload(fileName, avatarFile[0]);

      if (uploadError)
        throw new Error(`Supabase avatar upload error: ${uploadError.message}`);

      newData.data.avatar = `https://ftzecdrudoxvsowbazej.supabase.co/storage/v1/object/public/user-avatar//${fileName}`;
    } else if (avatarSrc) {
      newData.data.avatar = avatarSrc;
    }
    const { error: userUpdateError } = await supabase.auth.updateUser(newData);
    if (userUpdateError)
      throw new Error(`Supabase user update error: ${userUpdateError.message}`);
  } catch (err) {
    throw new Error(err);
  }
}
