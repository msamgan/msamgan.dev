<?php

namespace App\Http;

class EditorJs
{
    /*
     * third party plugins:
     * - youtubeEmbed (https://github.com/yuanwei92/editorjs-youtube-embed)
     * - inline image (https://www.npmjs.com/package/editorjs-inline-image)
     * */
    public function parse($content): string
    {
        $parsedContent = '';
        foreach ($content['blocks'] as $block) {
            $parsedContent .= match ($block['type']) {
                'header' => "<h{$block['data']['level']}>{$block['data']['text']}</h{$block['data']['level']}>",
                'paragraph' => "<p>{$block['data']['text']}</p>",
                'list' => "<ul>{$this->parseListItems($block['data']['items'])}</ul>",
                'delimiter' => '<hr />',
                'code' => "<pre><code>{$block['data']['code']}</code></pre>",
                'quote' => $this->parseQuote($block['data']),
                'image' => $this->parseImage($block['data']),
                'youtubeEmbed' => $this->parseYouTubeEmbed($block),
                'raw' => $block['data']['html'],
                'table' => $this->parseTable($block['data']['content']),
                default => '',
            };
        }

        return $parsedContent;
    }

    private function parseListItems(array $items): string
    {
        return implode('', array_map(fn ($item) => "<li>{$item}</li>", $items));
    }

    private function parseQuote(array $data): string
    {
        return "<div><blockquote>{$data['text']}</blockquote>" . ($data['caption'] ? "<cite>{$data['caption']}</cite>" : '') . '</div>';
    }

    private function parseImage(array $data): string
    {
        return "<img src=\"{$data['url']}\" alt=\"{$data['caption']}\" title=\"{$data['caption']}\">";
    }

    private function parseYouTubeEmbed(array $block): string
    {
        $videosId = explode('=', $block['data']['url'])[1];
        $embedUrl = 'https://www.youtube.com/embed/' . $videosId;

        return "<iframe width=\"800\" height=\"500\" src=\"{$embedUrl}\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>";
    }

    private function parseTable(array $data): string
    {
        $parsedContent = '<table>';
        $parsedContent .= '<thead>';
        $parsedContent .= '<tr>';
        foreach ($data[0] as $header) {
            $parsedContent .= "<th>{$header}</th>";
        }
        $parsedContent .= '</tr>';
        $parsedContent .= '</thead>';
        $parsedContent .= '<tbody>';
        for ($i = 1; $i < count($data); $i++) {
            $parsedContent .= '<tr>';
            foreach ($data[$i] as $cell) {
                $parsedContent .= "<td>{$cell}</td>";
            }
            $parsedContent .= '</tr>';
        }
        $parsedContent .= '</tbody>';
        $parsedContent .= '</table>';

        return $parsedContent;
    }
}
