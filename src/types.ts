interface LocaleString {
  ja: string;
  en: string;
}

interface CheckList {
  title: LocaleString;
  items: CheckListItem[];
}

interface CheckListItem {
  id: string;
  label: LocaleString;
}

