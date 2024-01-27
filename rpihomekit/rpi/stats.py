"""rpi stats"""
import shutil


def bytes_to_gb(bytes):
    return round(bytes / 1024 / 1024 / 1024, 2)


def get_stats():
    total, used, free = shutil.disk_usage("/")

    output = {
        "Disk": {
            "Total": bytes_to_gb(total),
            "Used": bytes_to_gb(used),
            "Free": bytes_to_gb(free),
            "Percent": round(used / total * 100, 2),
        },
        "Memory": {},
    }

    return output
