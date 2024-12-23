import Swal from 'sweetalert2'

export default function useSwal() {
    async function accepted(test) {
        await Swal.fire({
            width: '250px',
            icon: 'success',
            title: 'Berhasil',
            text: text == null ? 'Data telah disimpan' : text,
            showConfirmButton: false,
            timer: 1500,
            customClass: {
                title: 'text-lg',
                popup: 'text-sm text-center'
            }
        })
    }

    async function rejected(text) {
        await Swal.fire({
            width: '250px',
            icon: 'error',
            title: 'Gagal',
            text: text == null ? 'Data gagal disimpan' : text,
            showConfirmButton: false,
            timer: 1500,
            customClass: {
                title: 'text-lg',
                popup: 'text-sm text-center'
            }
        })
    }

    async function confirm(text) {
        const response = await Swal.fire({
            width: '250px',
            icon: 'question',
            title: 'Konfirmasi',
            text: text == null ? 'Apa anda yakin?' : text,
            showCancelButton: true,
            confirmButtonColor: "#3b82f6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yakin",
            cancelButtonText: "Tidak",
            customClass: {
                title: 'text-lg',
                popup: 'text-sm text-center'
            }
        })

        return response
    }

    return {
        accepted,
        rejected,
        confirm
    }
}