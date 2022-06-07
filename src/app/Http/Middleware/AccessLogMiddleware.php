<?php

namespace App\Http\Middleware;

use App\Log\LoggerFactory;
use Closure;
use Symfony\Component\HttpFoundation\Request;

/**
 * Class AccessLogMiddleware
 *
 * @package \App\Http\Middleware
 */
class AccessLogMiddleware
{
    /**
     * @var Logger
     */
    protected $logger;

    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \Closure                 $next
     *
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $response     = $next($request);
        $context      = [];
        $request_data = json_encode_unicode($request->all());
        $header_data  = json_encode_unicode($request->header());

        $responseTime   = number_format(microtime(true) - $_SERVER['REQUEST_TIME_FLOAT'], 3);
        $clientIp       = $request->getClientIp();
        $requestMethod  = $request->getMethod();
        $requestUri     = $request->getPathInfo();
        $responseStatus = $response->getStatusCode();

        if ($request->is('api/*')) {
            $this->logger = LoggerFactory::create("access_api");

            if ($responseStatus != 200) {
                $context = ['response' => json_encode_unicode($response->getContent(), JSON_UNESCAPED_UNICODE)];
            }
            $this->logger->info("$clientIp $requestMethod $requestUri $responseStatus $responseTime", [$request_data, $header_data, $context]);
        }

        return $response;
    }
}
